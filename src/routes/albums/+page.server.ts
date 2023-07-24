import type { Album } from '$lib/types/index.js';
import { fetchJson } from '$lib/util/api.js';
import { error } from '@sveltejs/kit';


export async function load({ fetch }) {
    try {
        const albums: Album[] = (await fetchJson('Album', fetch)).data;
        return { albums };
    } catch (e) {
        if((e as Error).message.toLowerCase().includes("too many")){
            throw error(429, (e as Error).message);
        }else{
            throw error(500, (e as Error).message);
        }
    }
}