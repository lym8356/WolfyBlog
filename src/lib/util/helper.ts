import { fetchJson } from "./agent";

type FetchArticlesParams = {
    pageNumber: number,
    pageSize: number,
    searchTerm?: string,
    searchCategory?: string,
    searchTags?: string,
    fetch: typeof fetch
};

export async function fetchArticles({ pageNumber, pageSize, searchTerm, searchCategory, searchTags, fetch }: FetchArticlesParams) {
    const params = new URLSearchParams({
        pageNumber: pageNumber.toString(),
        pageSize: pageSize.toString(),
        fields: 'id,title,createdAt',
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


export function generatePages(options: {
    currentPage?: number,
    totalPages?: number,
    searchTerm?: string,
    searchCategory?: string,
    searchTags?: string,
})
    : Array<{ name: string, href: string, active: boolean }> {

    const { currentPage, totalPages, searchTerm, searchCategory, searchTags } = options;

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

    let pageURL = searchCategory ? "/articles/categories" : searchTags ? "/articles/tags" : "/articles";
    // build the pages array
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => {
        let pageNumber = startPage + i;
        return { name: pageNumber.toString(), href: `${pageURL}?pageNumber=${pageNumber}${searchParamString}`, active: false }
    });
}