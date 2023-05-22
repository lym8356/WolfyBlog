import { error } from "@sveltejs/kit";
import { fetchJson } from "../util/agent";
import type { Article } from "../util/types";


export async function load({ fetch }) {
    try {
        const articles = await fetchJson('Article', fetch);
        return { articles };
    } catch (e) {
        throw error(404, (e as Error).message);
    }
}