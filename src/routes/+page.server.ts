import { error } from "@sveltejs/kit";
import { fetchJson } from "../lib/util/agent";
import type { AboutPage, Article, Category, Tag } from "../lib/types";


export async function load({ fetch }) {
    try {
        const articles: Article[] = (await fetchJson('Article?pageNumber=1&pageSize=10', fetch)).data;
        const categories: Category[] = (await fetchJson('Category', fetch)).data;
        const tags: Tag[] = (await fetchJson('Tag', fetch)).data;
        const notification: AboutPage = (await fetchJson('AboutPage/GetNotification')).data;
        return { articles, categories, tags, notification };
    } catch (e) {
        throw error(404, (e as Error).message);
    }
}