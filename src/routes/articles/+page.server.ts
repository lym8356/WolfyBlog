import { defaultArticleSearchFields, defaultPageNumber, defaultPageSize } from "$lib/constant/constant";
import type { Article, PaginationHeaderData } from "$lib/types";
import { fetchArticles, generatePages } from "$lib/util/helper";
import { error } from "@sveltejs/kit";


export async function load({ fetch, url }) {

    try {
        let pageSize = Number(url.searchParams.get('pageSize')) || defaultPageSize;
        let pageNumber = Number(url.searchParams.get('pageNumber')) || defaultPageNumber;
        let searchTerm = url.searchParams.get('keyword') || undefined;

        const fetchResponse = await fetchArticles({
            pageNumber,
            pageSize,
            searchTerm,
            fields: defaultArticleSearchFields + ",isDraft",
            fetch,
        });

        let articles: Article[] = fetchResponse.data;
        articles = articles.filter(a => a.isDraft == false);
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
            searchTerm: searchTerm
        });


        return { articles, paginationData, pages };
    } catch (e) {
        if((e as Error).message.toLowerCase().includes("too many")){
            throw error(429, (e as Error).message);
        }else{
            throw error(500, (e as Error).message);
        }
    }
}

