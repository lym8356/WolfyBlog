<script lang="ts">
    import type { Comment } from "../../lib/types";
    import MdiComment from "virtual:icons/mdi/comment-text";
    import Reply from "./Reply.svelte";
    import CommentBox from "./CommentBox.svelte";
    import { blur } from "svelte/transition";

    export let comment: Comment;
    export let replyToArticleId: string | null = null;

    $: replies = comment.replies;
    
    let showCommentBox = false;

    const toggleCommentBox = () => {
        showCommentBox = !showCommentBox;
    };
</script>

<div class="flex">
    <div class="flex-shrink-0 mr-3">
        <img
            class="mt-2 w-8 h-8 rounded-full sm:w-10 sm:h-10"
            src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
            alt="User"
        />
    </div>
    <div
        class="flex-1 border border-textPrimary-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed text-left"
    >
        <strong class="text-textPrimary-500">{comment.commenterUsername}</strong
        >
        <span class="text-xs text-textPrimary-200">
            {#if comment.createdAt}
                {new Date(comment.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                })}
            {:else}
                Unknown date
            {/if}
        </span>
        <p class="text-sm text-textPrimary-200">
            {comment.content}
        </p>
        <div
            class="my-5 flex items-center uppercase tracking-wide font-bold text-sm text-textPrimary-300 hover:underline"
        >
            <MdiComment />
            <button type="button" class="mb-1 ml-1" on:click={toggleCommentBox}>
                {showCommentBox ? "Cancel" : "Reply"}
            </button>
        </div>

        {#if showCommentBox}
            <div
                transition:blur={{ duration: 500 }}
                
            >
                <CommentBox parentCommentId={comment.id} replyToArticleId={replyToArticleId} />
            </div>
        {/if}

        <div class="space-y-4">
            {#each replies as reply (reply.id)}
                <Reply {reply} />
            {/each}
        </div>
    </div>
</div>
