import { error } from "@sveltejs/kit";
import { fetchJson } from "../lib/util/api";
import type { AboutPage, Article, Category, PaginationHeaderData, Tag } from "../lib/types";
import { fetchArticles } from "$lib/util/helper";
import { defaultPageNumber } from "$lib/constant/constant";

export const prerender = true;

export async function load({ fetch }) {

    try {
        const articleData = (await fetchArticles({ pageNumber: defaultPageNumber, pageSize: 5, fields: "titleSlug,title,createdAt,content,category,id, isDraft", fetch }));
        // Extract x-pagination header
        const paginationHeader = articleData.headers.get('x-pagination');
        let paginationData: PaginationHeaderData | null = null;
        if (paginationHeader) {
            paginationData = JSON.parse(paginationHeader);
        }
        let articles: Article[] = articleData.data;
        articles = articles.filter(a => a.isDraft == false);
        const articleCount = paginationData?.totalCount;
        const categories: Category[] = (await fetchJson('Category', fetch)).data;
        const tags: Tag[] = (await fetchJson('Tag', fetch)).data;
        const notification: AboutPage = (await fetchJson('AboutPage/GetNotification')).data;
        return { articles, categories, tags, notification, articleCount };
    } catch (e) {
        if ((e as Error).message.toLowerCase().includes("too many")) {
            throw error(429, (e as Error).message);
        } else {
            throw error(500, (e as Error).message);
        }
    }
}