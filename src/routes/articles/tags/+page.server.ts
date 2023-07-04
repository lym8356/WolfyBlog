import { defaultPageNumber, defaultPageSize } from "$lib/constant/constant";
import type { Article, Category, PaginationHeaderData, Tag } from "$lib/types";
import { fetchJson } from "$lib/util/agent";
import { fetchArticles, generatePages } from "$lib/util/helper";


export async function load({ fetch, url }) {

    let tags: Tag[] = (await fetchJson("Tag")).data;
    let searchTags = url.searchParams.get('tags') || undefined;
    let pageSize = Number(url.searchParams.get('pageSize')) || defaultPageSize;
    let pageNumber = Number(url.searchParams.get('pageNumber')) || defaultPageNumber;

    const fetchResponse = await fetchArticles({
        pageNumber,
        pageSize,
        searchTags: searchTags,
        fetch,
    });

    const articles: Article[] = fetchResponse.data;
    const headers = fetchResponse.headers;

    // Extract x-pagination header
    const paginationHeader = headers.get('x-pagination');
    let paginationData: PaginationHeaderData | null = null;
    if (paginationHeader) {
        paginationData = JSON.parse(paginationHeader);
    }

    // generate pages for pagination component
    let pages: Array<{ name: string, href: string, active: boolean }> = generatePages({
        currentPage: paginationData?.currentPage,
        totalPages: paginationData?.totalPages,
        searchTags: searchTags
    });

    return { articles, paginationData, pages, tags };
}


