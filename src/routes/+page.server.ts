import { error } from "@sveltejs/kit";
import { fetchJson } from "../lib/util/agent";
import type { AboutPage, Article, Category, PaginationHeaderData, Tag } from "../lib/types";


export async function load({ fetch }) {
    try {
        const headers = (await fetchJson('Article?pageNumber=1&pageSize=5', fetch)).headers;
        // Extract x-pagination header
        const paginationHeader = headers.get('x-pagination');
        let paginationData: PaginationHeaderData | null = null;
        if (paginationHeader) {
            paginationData = JSON.parse(paginationHeader);
        }

        const articles: Article[] = (await fetchJson('Article?pageNumber=1&pageSize=5', fetch)).data;
        const articleCount = paginationData?.totalCount;
        const categories: Category[] = (await fetchJson('Category', fetch)).data;
        const tags: Tag[] = (await fetchJson('Tag', fetch)).data;
        const notification: AboutPage = (await fetchJson('AboutPage/GetNotification')).data;
        return { articles, categories, tags, notification, articleCount };
    } catch (e) {
        throw error(404, (e as Error).message);
    }
}