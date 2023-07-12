<script lang="ts">
    import { page } from "$app/stores";
    import { Button, P } from "flowbite-svelte";
    import CustomContainer from "../../../components/CustomContainer.svelte";
    import CustomTitle from "../../../components/CustomTitle.svelte";
    import { goto } from "$app/navigation";
    import ArticleList from "../../../components/ArticleList.svelte";
    import CustomPagination from "../../../components/CustomPagination.svelte";

    export let data;
    $: articles = data.articles || [];
    $: paginationData = data.paginationData;
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
    const { tags } = data;

    let searchTags: string[] = [];
    let searchTagsString = "";

    const handleTagClick = (tag: string) => {
        const tagIndex = searchTags.indexOf(tag);
        if (tagIndex > -1) {
            // If the tag is already in the array, remove it
            searchTags.splice(tagIndex, 1);
        } else {
            // If the tag isn't in the array, add it
            searchTags.push(tag);
        }
        searchTagsString = searchTags.join(",");

        if (searchTagsString != "") {
            goto(`/articles/tags?tags=${searchTagsString}`);
        } else {
            goto(`/articles/tags`);
        }
    };
</script>

<CustomTitle titleString="Tags" />

<CustomContainer>
    <div class="grid lg:grid-cols-8 lg:gap-2 grid-cols-3 gap-1">
        {#each tags as tag}
            <Button
                pill
                color="light"
                class={searchTagsString.includes(tag.title)
                    ? "!bg-textPrimary-400 !text-primary-800"
                    : ""}
                on:click={() => {
                    handleTagClick(tag.title);
                }}
            >
                <span class="text-sm">{tag.title}</span>
            </Button>
        {/each}
    </div>
</CustomContainer>

{#if searchTagsString != "" && articles.length > 0}
    <CustomContainer>
        <ArticleList {articles} />
        <CustomPagination
            {paginationData}
            searchTags={searchTagsString}
            {pages}
        />
    </CustomContainer>
{:else if searchTagsString != "" && articles.length == 0}
    <CustomContainer>
        <div class="p-10">
            <P size="2xl" align="center" color="text-textPrimary-400"
                >No articles found</P
            >
        </div>
    </CustomContainer>
{/if}
