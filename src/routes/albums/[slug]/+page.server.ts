import type { Album, Photo } from '$lib/types/index.js';
import { fetchJson } from '$lib/util/api';
import { error } from '@sveltejs/kit';


export async function load({ fetch, params }) {
    try {
        const album: Album = (await fetchJson(`Album/${params.slug}`, fetch)).data;
        const albumPhotos = album.albumPhotos.map((photo, index) => ({
            alt: photo.id,
            src: photo.url,
            index: index,
            original: photo.url,
            thumbnail: photo.url
        }));

        return { album, albumPhotos };
    } catch (e) {
        if((e as Error).message.toLowerCase().includes("too many")){
            throw error(429, (e as Error).message);
        }else{
            throw error(500, (e as Error).message);
        }
    }
}