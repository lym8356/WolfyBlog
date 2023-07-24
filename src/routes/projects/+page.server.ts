import type { Project } from '$lib/types/index.js';
import { fetchJson } from '$lib/util/api';
import { error } from '@sveltejs/kit';


export async function load({ fetch }) {
    try {
        const projects: Project[] = (await fetchJson('Project', fetch)).data;
        
        return { projects };
    } catch (e) {
        if((e as Error).message.toLowerCase().includes("too many")){
            throw error(429, (e as Error).message);
        }else{
            throw error(500, (e as Error).message);
        }
    }
}