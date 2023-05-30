<script lang="ts">
	export let data;
	import "prismjs/themes/prism-okaidia.min.css";
	import { toc, createTocStore } from "@svelte-put/toc";
	// import Toc from 'svelte-toc';
	import MarkDownNav from "../../../components/MarkDownNav.svelte";
	import SingleComment from "../../../components/Comment/Comment.svelte";
	import type { Comment } from "$lib/types";
    import { Pagination } from "flowbite-svelte";
    import CommentBox from "../../../components/Comment/CommentBox.svelte";

	const tocStore = createTocStore();
	const { article, comments } = data;

	// only show comments not replies
	let mainComments = comments.filter((c) => c.parentCommentId == null);
</script>

<div class="pt-8 pb-8 lg:pt-16 lg:pb-16">
	<section
		class="p-2 mx-auto max-w-screen-lg bg-primary-900 rounded-2xl basis-3/4"
	>
		<div class="w-full p-4">
			<div
				class="prose prose-invert lg:prose-lg max-w-none text-justify text-textPrimary-400 prose-headings:text-textPrimary-200"
				use:toc={{
					store: tocStore,
					observe: { threshold: 0.4 },
					anchor: false,
				}}
			>
				{@html article.content}
			</div>
		</div>
		<hr class="border-dashed border-textPrimary-400" />
		<CommentBox />
		<div class="py-4 lg:py-8 antialiased mx-auto max-w-screen-md space-y-4">
			<h3 class="mb-4 text-lg font-semibold text-textPrimary-400">
				{comments.length}
				{comments.length == 1 ? "Comment" : "Comments"}
			</h3>
			{#each mainComments as comment}
				<SingleComment {comment} />
			{/each}
			<Pagination
				normalClass="!bg-primary-700 border-transparent text-textPrimary-200 hover:text-textPrimary-400"
				on:previous={(e) => {
					e.preventDefault();
					// onPageChange(currentPage - 1);
				}}
				on:next={(e) => {
					e.preventDefault();
					// onPageChange(currentPage + 1);
				}}
			/>
		</div>
	</section>
	<section
		class="basis-1/3 lg:block fixed top-1/4 right-10 max-h-96 overflow-y-auto hidden"
	>
		<MarkDownNav {tocStore} />
	</section>
</div>
