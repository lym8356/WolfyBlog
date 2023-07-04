<script lang="ts">
    import { navigationLinks } from "$lib/constant/constant";
    import CustomTitle from "../../components/CustomTitle.svelte";
    import { goto } from "$app/navigation";
    import { Button, Helper, Input, P } from "flowbite-svelte";
    import { page } from "$app/stores";
    import CustomContainer from "../../components/CustomContainer.svelte";
    import MdiMagnify from "virtual:icons/mdi/magnify";
    import MdiClear from "virtual:icons/mdi/close-circle";
    import ArticleList from "../../components/ArticleList.svelte";
    import CustomPagination from "../../components/CustomPagination.svelte";

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

    let searchTerm = "";
    let inputError = false;

    function searchArticles() {
        if (searchTerm.trim() === "") {
            inputError = true;
        } else {
            inputError = false;
            goto(`/articles?keyword=${searchTerm}`);
        }
    }
    function clearSearch() {
        searchTerm = "";
        inputError = false;
        goto("/articles");
    }
</script>

<CustomTitle titleString={navigationLinks.Articles} />

<CustomContainer>
    <div class="flex items-center space-x-2 my-2">
        <Input
            class="flex-grow"
            bind:value={searchTerm}
            type="search"
            color={inputError ? "red" : "base"}
            placeholder="Search articles..."
        />
        <Button class="flex-none" on:click={searchArticles}
            ><MdiMagnify class="text-lg text-textPrimary-200" /></Button
        >
        <Button class="flex-none" on:click={clearSearch}
            ><MdiClear class="text-lg text-textPrimary-200" /></Button
        >
    </div>
    {#if inputError}
        <Helper class="my-2" color="red">
            <span class="text-base">Keyword cannot be empty.</span>
        </Helper>
    {/if}

    {#if articles.length > 0}
        <ArticleList {articles} />
        <CustomPagination {paginationData} {searchTerm} {pages} />
    {:else}
        <div class="p-10">
            <P size="2xl" align="center" color="text-textPrimary-400"
                >No articles found</P
            >
        </div>
    {/if}
</CustomContainer>
