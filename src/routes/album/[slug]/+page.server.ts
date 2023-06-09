import type { Album, Photo } from '$lib/types/index.js';
import { fetchJson } from '$lib/util/agent';
import { error } from '@sveltejs/kit';


export async function load({ fetch, params }) {
    try {
        const album: Album = await fetchJson(`Album/${params.slug}`, fetch);
        const albumPhotos = album.albumPhotos.map((photo, index) => ({
            alt: photo.id,
            src: photo.url,
            index: index,
            original: photo.url,
            thumbnail: photo.url
        }));

        return { album, albumPhotos };
    } catch (e) {
        throw error(404, (e as Error).message);
    }
}