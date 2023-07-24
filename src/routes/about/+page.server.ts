import type { AboutPage } from "$lib/types/index.js";
import { fetchJson } from "$lib/util/api.js";
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
        if((e as Error).message.toLowerCase().includes("too many")){
            throw error(429, (e as Error).message);
        }else{
            throw error(500, (e as Error).message);
        }
    }
}