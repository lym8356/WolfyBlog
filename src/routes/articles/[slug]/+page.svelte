<script lang="ts">
	export let data;
	import "prismjs/themes/prism-okaidia.min.css";
	import Toc from 'svelte-toc';
	import SingleComment from "../../../components/Comment/Comment.svelte";
    import CommentBox from "../../../components/Comment/CommentBox.svelte";

	$: ({ article, comments } = data);

	// only show main comments not replies
</script>

<svelte:head>
	<title>{article.title}</title>
	<meta content={article.titleSlug} property="og:title" />
</svelte:head>

<div class="pt-8 pb-8 lg:pt-16 lg:pb-16">
	<section
		class="p-2 mx-auto max-w-screen-lg bg-primary-900 rounded-2xl basis-3/4"
	>
		<div class="w-full p-4">
			<div
				class="prose prose-invert lg:prose-lg max-w-none text-justify text-textPrimary-400 prose-headings:text-textPrimary-200"
			>
				{@html article.content}
			</div>
		</div>
		<hr class="border-dashed border-textPrimary-400" />

		<div class="mx-4">
			<CommentBox replyToArticleId={article.id} />
		</div>
		
		<div class="py-4 lg:py-8 antialiased mx-auto max-w-screen-md space-y-4">
			<h3 class="mb-4 text-lg font-semibold text-textPrimary-400 toc-exclude">
				{comments.length}
				{comments.length == 1 ? "Comment" : "Comments"}
			</h3>
			{#each comments as comment}
				<SingleComment {comment} replyToArticleId={article.id} />
			{/each}
			<!-- <Pagination
				normalClass="!bg-primary-700 border-transparent text-textPrimary-200 hover:text-textPrimary-400"
				on:previous={(e) => {
					e.preventDefault();
					onPageChange(currentPage - 1);
				}}
				on:next={(e) => {
					e.preventDefault();
					onPageChange(currentPage + 1);
				}}
			/> -->
		</div>
	</section>
	<section
		class="basis-1/3 fixed top-40 right-14"
	>
		<Toc
			warnOnEmpty = {false}
			title = ""
			--toc-max-height = "50vh"
			--toc-desktop-max-width = "15vw"
			--toc-li-color = "#FFD966"
			--toc-li-hover-color = "#FFF9E6"
			--toc-active-color = "#FFF9E6"
			--toc-active-bg = "#1C1C1E"
			--toc-mobile-bg = "#404040"
			--toc-mobile-btn-bg = "#FFD966"
		/>
	</section>
</div>

<style>

</style>