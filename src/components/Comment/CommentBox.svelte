<script lang="ts">
    import type { CommentFormValues } from "$lib/types";
    import { postJson } from "$lib/util/api";
    import {
        Button,
        ButtonGroup,
        Helper,
        Input,
        InputAddon,
        Textarea,
        Toast,
    } from "flowbite-svelte";
    import MdiAccount from "virtual:icons/mdi/account";
    import MdiEmail from "virtual:icons/mdi/email";
    import { form, field } from "svelte-forms";
    import { required, email, max } from "svelte-forms/validators";
    import MdiSuccess from "virtual:icons/mdi/check-circle";
    import MdiError from "virtual:icons/mdi/alert-circle";
    import { getContext } from "svelte";

    export let parentCommentId: string | null = null;
    export let replyToArticleId: string | null = null;

    // svelte-forms elements
    const usernameField = field("username", "", [required(), max(20)], {
        checkOnInit: true,
    });
    const emailField = field("email", "", [required(), email(), max(40)], {
        checkOnInit: true,
    });
    const commentContent = field("content", "", [required(), max(500)], {
        checkOnInit: true,
    });
    const formObject = form(usernameField, emailField, commentContent);

    // validation elements
    let usernameError = "";
    let emailError = "";
    let commentError = "";
    let submittedOnce = false;
    $: {
        if (submittedOnce) {
            if ($formObject.hasError("username.required")) {
                usernameError = "Username cannot be empty";
            } else if ($formObject.hasError("username.max")) {
                usernameError = "Username needs to be less than 20 characters";
            } else {
                usernameError = "";
            }
        }
    }

    $: {
        if (submittedOnce) {
            if ($formObject.hasError("email.required")) {
                emailError = "Email cannot be empty";
            } else if ($formObject.hasError("email.not_an_email")) {
                emailError = "Email format is invalid";
            } else if ($formObject.hasError("email.max")) {
                emailError = "Email cannot be too long";
            } else {
                emailError = "";
            }
        }
    }

    $: {
        if (submittedOnce) {
            if ($formObject.hasError("content.required")) {
                commentError = "Comment cannot be empty";
            } else if ($formObject.hasError("content.max")) {
                commentError = "Comment needs to be less than 500 characters";
            } else {
                commentError = "";
            }
        }
    }

    // flowbite toast elements
    let toastVisible = false;
    let counterToHide = 5;
    let responseError = false;

    function showToast() {
        toastVisible = true;
        counterToHide = 5;
        autoHideToast();
    }

    function autoHideToast() {
        if (--counterToHide > 0) {
            return setTimeout(autoHideToast, 1000);
        }
        toastVisible = false;
    }

    async function handleSubmit(event: Event) {
        submittedOnce = true;
        event.preventDefault();

        if (!$formObject.valid) return;

        const comment: CommentFormValues = {
            content: $commentContent.value,
            commenterEmail: $emailField.value,
            commenterUsername: $usernameField.value,
            parentCommentId: parentCommentId ? parentCommentId : null,
            replyToArticleId: replyToArticleId ? replyToArticleId : null,
        };

        try {
            await fetch("/kit_api/comments", {
                method: "POST",
                body: JSON.stringify(comment),
                headers: { "content-type": "application/json" },
            });
            responseError = false;
        } catch (e) {
            responseError = true;
        } finally {
            formObject.clear();
            showToast();
            formObject.validate();
            submittedOnce = false;
            if (!responseError) {
                refresh();
            }
        }
    }

    let refresh: Function = () => {};
    if (replyToArticleId) {
        refresh = getContext("refreshArticle");
    } else {
        refresh = getContext("refresh");
    }
</script>

<section class="mb-6 mt-3">
    <div class="flex justify-between space-x-4">
        <div class="w-full">
            <ButtonGroup class="w-full">
                <InputAddon
                    class={`flex-shrink-0 text-primary-900 ${
                        usernameError == ""
                            ? "bg-primary-200"
                            : "border-red-600 bg-red-200"
                    }`}
                >
                    <MdiAccount
                        class="text-base"
                        color={`${usernameError == "" ? "base" : "red"}`}
                    />
                </InputAddon>
                <Input
                    placeholder="Username*"
                    required
                    bind:value={$usernameField.value}
                    color={`${usernameError == "" ? "base" : "red"}`}
                />
            </ButtonGroup>
            {#if usernameError}
                <Helper class="mt-2" color="red">{usernameError}</Helper>
            {/if}
        </div>

        <div class="w-full">
            <ButtonGroup class="w-full">
                <InputAddon
                    class={`flex-shrink-0 text-primary-900 ${
                        emailError == ""
                            ? "bg-primary-200"
                            : "border-red-600 bg-red-200"
                    }`}
                >
                    <MdiEmail
                        class="text-base"
                        color={`${emailError == "" ? "base" : "red"}`}
                    />
                </InputAddon>
                <Input
                    placeholder="Email*"
                    required
                    bind:value={$emailField.value}
                    color={`${emailError == "" ? "base" : "red"}`}
                />
            </ButtonGroup>
            {#if emailError}
                <Helper class="mt-2" color="red">{emailError}</Helper>
            {/if}
        </div>
    </div>
    <div class="py-2 px-4 my-3 bg-primary-300 rounded-lg rounded-t-lg border-0">
        <Textarea
            id="comment"
            rows="6"
            class="bg-transparent px-0 w-full text-sm border-0 focus:ring-0 focus:outline-none text-primary-800"
            placeholder="Write a comment..."
            required
            bind:value={$commentContent.value}
        />
        {#if commentError}
            <Helper class="mt-2" color="red">{commentError}</Helper>
        {/if}
    </div>
    <div class="text-right">
        <Button
            on:click={handleSubmit}
            type="submit"
            class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-textPrimary-200 bg-primary-700 rounded-lg hover:text-textPrimary-400"
        >
            Post comment
        </Button>
    </div>
    <div class="flex justify-center mt-4">
        {#if toastVisible && !responseError}
            <Toast bind:open={toastVisible}>
                <svelte:fragment slot="icon">
                    <MdiSuccess color="green" class="text-xl" />
                </svelte:fragment>
                <span class="text-sm">Your comment has been submitted</span>
            </Toast>
        {:else if toastVisible && responseError}
            <Toast bind:open={toastVisible}>
                <svelte:fragment slot="icon">
                    <MdiError color="red" class="text-xl" />
                </svelte:fragment>
                <span class="text-sm"
                    >There was an error. Please try again later</span
                >
            </Toast>
        {/if}
    </div>
</section>
