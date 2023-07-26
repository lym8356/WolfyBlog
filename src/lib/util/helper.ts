import { defaultPageNumber, defaultPageSize } from "$lib/constant/constant";
import type { Fetch } from "$lib/types";
import { fetchJson } from "./api";


type FetchArticlesParams = {
    pageNumber: number,
    pageSize: number,
    searchTerm?: string,
    searchCategory?: string,
    searchTags?: string,
    fields?: string,
    fetch: typeof fetch
};

type FetchCommentsParams = {
    pageNumber: number,
    pageSize: number,
    fetch: typeof fetch
}

export async function fetchArticles({ pageNumber, pageSize, searchTerm, searchCategory, searchTags, fields, fetch }: FetchArticlesParams) {
    const params = new URLSearchParams({
        pageNumber: pageNumber.toString(),
        pageSize: pageSize.toString(),
        ...(fields && { fields: fields }),
        ...(searchTerm && { keyword: searchTerm }),
        ...(searchCategory && { category: searchCategory }),
        ...(searchTags && { tags: searchTags }),
    });

    let requestURL = `article?${params}`;
    if (searchCategory) requestURL = `article/searchbycategory?${params}`;
    if (searchTags) requestURL = `article/searchbytags?${params}`;

    // if(searchTags) requestURL = `searchbytags${params}`;
    const fetchResponse = await fetchJson(requestURL, fetch);

    return fetchResponse;
}

export async function fetchDiscussionComments({ pageNumber, pageSize }: FetchCommentsParams) {
    const params = new URLSearchParams({
        pageNumber: pageNumber.toString(),
        pageSize: pageSize.toString()
    });

    let requestURL = `comment?excludeRepliesToArticles=true&${params}`;
    const fetchResponse = await fetchJson(requestURL, fetch);
    return fetchResponse;
}

// to use with flowbite-svelte pagination component
export function generatePages(options: {
    currentPage?: number,
    totalPages?: number,
    searchTerm?: string,
    searchCategory?: string,
    searchTags?: string,
    contentType?: string
})
    : Array<{ name: string, href: string, active: boolean }> {

    const { currentPage, totalPages, searchTerm, searchCategory, searchTags, contentType } = options;

    if (!totalPages) return [];
    let startPage = Math.max(1, currentPage ? currentPage - 2 : 1);
    let endPage = Math.min(totalPages, currentPage ? currentPage + 2 : 5);

    // adjust if we're near the start
    if (!currentPage || currentPage <= 3) {
        endPage = Math.min(totalPages, 5);
    }

    // adjust if we're near the end
    if (totalPages - (currentPage || 1) < 2) {
        startPage = Math.max(1, totalPages - 4);
    }

    let searchParamString = '';
    if (searchTerm) {
        searchParamString += `&keyword=${searchTerm}`;
    }
    if (searchCategory) {
        searchParamString += `&category=${searchCategory}`;
    }
    if (searchTags) {
        searchParamString += `&tags=${searchTags}`;
    }

    let pageURL = "/articles";  // default to "articles"
    if (contentType === "discussion") {
        pageURL = "/discussion";
    } else if (searchCategory) {
        pageURL = "/articles/categories";
    } else if (searchTags) {
        pageURL = "/articles/tags";
    }
    // build the pages array
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => {
        let pageNumber = startPage + i;
        return { name: pageNumber.toString(), href: `${pageURL}?pageNumber=${pageNumber}${searchParamString}`, active: false }
    });
}


export const fetchHomePageData = (fetch: Fetch) => {
    const articles = fetchArticles({pageNumber:defaultPageNumber, pageSize:defaultPageSize, fetch});
    return {data: {articles}}
}