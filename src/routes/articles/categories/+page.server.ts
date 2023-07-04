import { defaultPageNumber, defaultPageSize } from "$lib/constant/constant";
import type { Article, Category, PaginationHeaderData } from "$lib/types";
import { fetchJson } from "$lib/util/agent";
import { fetchArticles, generatePages } from "$lib/util/helper";


export async function load({ fetch, url }) {

    let categories: Category[] = (await fetchJson("Category")).data;
    let searchCategory = url.searchParams.get('category') || undefined;
    let pageSize = Number(url.searchParams.get('pageSize')) || defaultPageSize;
    let pageNumber = Number(url.searchParams.get('pageNumber')) || defaultPageNumber;

    const fetchResponse = await fetchArticles({
        pageNumber,
        pageSize,
        searchCategory,
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
        searchCategory: searchCategory
    });

    return { articles, paginationData, pages, categories };
}


