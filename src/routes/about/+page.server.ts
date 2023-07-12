import type { AboutPage } from "$lib/types/index.js";
import { fetchJson } from "$lib/util/agent.js";
import { error } from "@sveltejs/kit";
import { compile } from "mdsvex";


export async function load({ fetch }) {
    try {
        const aboutPages: AboutPage[] = (await fetchJson('AboutPage', fetch)).data;

        aboutPages.forEach(async about => {
            const parsedHtml = await compile(about.content);
            if (parsedHtml) {
                about.content = parsedHtml.code;
                // console.log(parsedHtml.code)
            }
        });
        
        return { aboutPages };
    } catch (e) {
        throw error(404, (e as Error).message);
    }
}