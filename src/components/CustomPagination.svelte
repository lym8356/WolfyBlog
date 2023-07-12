<script lang="ts">
    import { ChevronLeft, ChevronRight, Pagination } from "flowbite-svelte";
    import { goto } from "$app/navigation";
    import type { PaginationHeaderData } from "$lib/types";

    interface Page {
        active: boolean;
        name: string;
        href: string;
    }

    export let paginationData: PaginationHeaderData | null;
    export let pages: Page[];
    export let searchTerm: string | null = null;
    export let searchCategory: string | null = null;
    export let searchTags: string | null = null;
    export let contentType: string | null = null;

    function changePage(direction: "previous" | "next") {
        let params = new URLSearchParams();
        // Check if there is a searchTerm and if so, add to params
        if (searchTerm) params.append("keyword", searchTerm);

        // Check if there is a searchCategory and if so, add to params
        if (searchCategory) params.append("category", searchCategory);

        // Check if there is searchTags and if so, add to params
        if (searchTags) params.append("tags", searchTags);

        // Stringify the params
        let searchQuery = params.toString() ? `&${params.toString()}` : "";

        let pageURL = "/articles"; // default to "articles"
        if (contentType === "discussion") {
            pageURL = "/discussion";
        } else if (searchCategory) {
            pageURL = "/articles/categories";
        } else if (searchTags) {
            pageURL = "/articles/tags";
        }

        if (direction === "next" && paginationData?.nextPageLink) {
            goto(
                `${pageURL}?pageNumber=${
                    paginationData.currentPage + 1
                }${searchQuery}`
            );
        } else if (
            direction === "previous" &&
            paginationData?.previousPageLink
        ) {
            goto(
                `${pageURL}?pageNumber=${
                    paginationData.currentPage - 1
                }${searchQuery}`
            );
        }
    }
</script>

<Pagination
    {pages}
    on:previous={() => changePage("previous")}
    on:next={() => changePage("next")}
    activeClass="text-textPrimary-100 border border-primary-300 bg-primary-100 hover:!bg-textPrimary-100 hover:text-textPrimary-800"
    normalClass="hover:bg-textPrimary-100"
    class="mt-1 text-textPrimary-400"
    icon
>
    <svelte:fragment slot="prev">
        <ChevronLeft class="w-5 h-5 text-primary-900" />
    </svelte:fragment>
    <svelte:fragment slot="next">
        <ChevronRight class="w-5 h-5 text-primary-900" />
    </svelte:fragment>
</Pagination>
