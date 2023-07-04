import type { Album } from '$lib/types/index.js';
import { fetchJson } from '$lib/util/agent.js';
import { error } from '@sveltejs/kit';


export async function load({ fetch }) {
    try {
        const albums: Album[] = await fetchJson('Album', fetch);
        return { albums };
    } catch (e) {
        throw error(404, (e as Error).message);
    }
}