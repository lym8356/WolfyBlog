import { error } from "@sveltejs/kit";
import { fetchJson } from "../lib/util/agent";
import type { Article, Category, Tag } from "../lib/types";


export async function load({ fetch }) {
    try {
        const articles: Article[] = await fetchJson('Article', fetch);
        const categories: Category[] = await fetchJson('Category', fetch);
        const tags: Tag[] = await fetchJson('Tag', fetch);
        return { articles, categories, tags };
    } catch (e) {
        throw error(404, (e as Error).message);
    }
}