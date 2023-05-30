import { error } from "@sveltejs/kit";
import { fetchJson } from "../../../lib/util/agent";
import { compile } from "mdsvex";
import type { Article, Comment } from "../../../lib/types";



export async function load({ fetch, params }) {
    try {
        const article: Article = await fetchJson(`Article/${params.slug}`, fetch);
        let comments: Comment[] = article.comments;
        const parsedHtml = await compile(article.content);
        if (parsedHtml) {
            article.content = parsedHtml.code;
            // console.log(parsedHtml.code)
        } else {
            article.content = "Parsed Error";
        }
        return { article, comments };
    } catch (e) {
        throw error(404, (e as Error).message);
    }
}