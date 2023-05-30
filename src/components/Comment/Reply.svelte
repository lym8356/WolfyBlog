<script lang="ts">
    import type { Comment } from "$lib/types";
    import { onMount } from "svelte";
    import { comment } from "svelte/internal";

    export let reply: Comment;
    export let replies: Comment[] = [];

    onMount(() => {
        if (reply) {
            replies = reply.replies;
        }
    });
</script>

<div class="flex">
    <div class="flex-shrink-0 mr-3">
        <img
            class="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="User"
        />
    </div>
    <div class="flex-1 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
        <strong class="text-textPrimary-500">{reply.commenterUsername}</strong>
        <span class="text-xs text-textPrimary-200">
            {#if reply.createdAt}
                {new Date(reply.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric"
                })}
            {:else}
                Unknown date
            {/if}
        </span>
        <p class="text-sm text-textPrimary-200">
            {reply.content}
        </p>
    </div>
</div>

{#each replies as reply}
    <svelte:self {reply} />
{/each}

<style>
</style>
