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
    const { categories } = data;
    let searchCategory = "";
</script>

<CustomTitle titleString="Categories" />

<CustomContainer>
    <div class="grid md:grid-cols-5 gap-2">
        {#each categories as category}
            <Button
                outline
                color="yellow"
                class={`flex justify-between items-center !text-lg ${
                    category.title === searchCategory
                        ? "!bg-textPrimary-400 !text-primary-800 hover:bg-textPrimary-400 hover:!text-primary-800"
                        : "!text-textPrimary-200 hover:!bg-primary-800"
                } `}
                on:click={() => {
                    if (searchCategory == category.title) return;
                    goto(`/articles/categories?category=${category.title}`);
                    searchCategory = category.title;
                }}
            >
                <span>{category.title}</span>
                <span>{category.articleCount}</span>
            </Button>
        {/each}
    </div>
</CustomContainer>

{#if searchCategory != "" && articles.length > 0}
    <CustomContainer>
        <ArticleList {articles} />
        <CustomPagination {paginationData} {searchCategory} {pages} />
    </CustomContainer>
{:else if searchCategory != "" && articles.length == 0}
    <CustomContainer>
        <div class="p-10">
            <P size="2xl" align="center" color="text-textPrimary-400"
                >No articles found</P
            >
        </div>
    </CustomContainer>
{/if}
