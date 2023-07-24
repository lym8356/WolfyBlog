import { error } from "@sveltejs/kit";
import { fetchJson } from "../../../lib/util/api";
import { compile } from "mdsvex";
import type { Article, Comment } from "../../../lib/types";



export async function load({ fetch, params }) {
    try {
        const { data } = await fetchJson(`Article/Slug/${params.slug}`, fetch);
        const article: Article = data;
        let comments: Comment[] = article.comments;

        // filter out replies
        if (comments) {
            comments = comments.filter((c) => c.parentCommentId == null);
        }

        const parsedHtml = await compile(article.content);

        if (parsedHtml) {
            article.content = parsedHtml.code;
        } else {
            article.content = "Parsed Error";
        }
        return { article, comments };
    } catch (e) {
        if((e as Error).message.toLowerCase().includes("too many")){
            throw error(429, (e as Error).message);
        }else{
            throw error(500, (e as Error).message);
        }
    }
}