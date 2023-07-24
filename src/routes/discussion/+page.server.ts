import { defaultPageNumber, defaultPageSize } from "$lib/constant/constant";
import type { PaginationHeaderData } from "$lib/types";
import { fetchDiscussionComments, generatePages } from "$lib/util/helper";
import { error } from "@sveltejs/kit";


export async function load({ fetch, url }) {

    try {
        let pageSize = Number(url.searchParams.get('pageSize')) || defaultPageSize;
        let pageNumber = Number(url.searchParams.get('pageNumber')) || defaultPageNumber;

        const fetchResponse = await fetchDiscussionComments({
            pageNumber,
            pageSize,
            fetch
        });

        const discussionComments = fetchResponse.data;
        const headers = fetchResponse.headers;
        let commentsCount = 0;


        // Extract x-pagination header
        const paginationHeader = headers.get('x-pagination');
        let paginationData: PaginationHeaderData | null = null;
        if (paginationHeader) {
            paginationData = JSON.parse(paginationHeader);
        }

        if (paginationData?.totalCount) {
            commentsCount = paginationData?.totalCount;
        }

        // generate pages for pagination component
        let pages: Array<{ name: string, href: string, active: boolean }> = generatePages({
            currentPage: paginationData?.currentPage,
            totalPages: paginationData?.totalPages,
            contentType: "discussion"
        });


        return { discussionComments, paginationData, pages, commentsCount };
    } catch (e) {
        if((e as Error).message.toLowerCase().includes("too many")){
            throw error(429, (e as Error).message);
        }else{
            throw error(500, (e as Error).message);
        }
    }
}