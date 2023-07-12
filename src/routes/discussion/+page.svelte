<script lang="ts">
    import CommentBox from "../../components/Comment/CommentBox.svelte";
    import CustomContainer from "../../components/CustomContainer.svelte";
    import SingleComment from "../../components/Comment/Comment.svelte";
    import CustomPagination from "../../components/CustomPagination.svelte";
    import { P } from "flowbite-svelte";
    import { page } from "$app/stores";
    import CustomTitle from "../../components/CustomTitle.svelte";
    import { navigationLinks } from "$lib/constant/constant";

    export let data;
    $: ({ paginationData, commentsCount } = data);
    $: discussionComments = data.discussionComments;
    $: activeUrl = $page.url.searchParams.get("pageNumber") || "1";

    $: pages = (data.pages || []).map((page) => {
        let hrefValue = new URLSearchParams(page.href.split("?")[1]).get(
            "pageNumber"
        );
        return {
            ...page,
            active: hrefValue === activeUrl,
        };
    });
</script>

<CustomTitle titleString={navigationLinks.Discussion} />

<CustomContainer>
    <div class="pt-8 pb-8 lg:pt-8 lg:pb-8">
        <div class="text-textPrimary-200 text-lgcp mb-4">
            <p>Hi, I'm Adam Lu</p>
            <p>Welcome to my blog!</p>
            <p>Feel free to leave a message.</p>
            <p>If you happen to discover a bug on my website, please let me know.</p>
        </div>

        <hr class="border-dashed border-textPrimary-400" />

        <div class="mx-4">
            <CommentBox />
        </div>

        <div class="py-4 lg:py-8 antialiased mx-auto max-w-screen-md space-y-4">
            <h3
                class="mb-4 text-lg font-semibold text-textPrimary-400 toc-exclude"
            >
                {commentsCount}
                {commentsCount == 1 ? "Comment" : "Comments"}
            </h3>
            {#each discussionComments as comment}
                <SingleComment {comment} />
            {/each}
        </div>
    </div>
    {#if commentsCount > 0}
        <CustomPagination {paginationData} {pages} contentType="discussion" />
    {:else}
        <div class="p-10">
            <P size="2xl" align="center" color="text-textPrimary-400"
                >Be the first one to share your thoughts!</P
            >
        </div>
    {/if}
</CustomContainer>
