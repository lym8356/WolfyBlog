import type { Project } from '$lib/types/index.js';
import { fetchJson } from '$lib/util/agent';
import { error } from '@sveltejs/kit';


export async function load({ fetch }) {
    try {
        const projects: Project[] = await fetchJson('Project', fetch);
        
        return { projects };
    } catch (e) {
        throw error(404, (e as Error).message);
    }
}