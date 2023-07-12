import type { SiteLog } from '$lib/types/index.js';
import { fetchJson } from '$lib/util/agent.js';
import { error } from '@sveltejs/kit';


export async function load({ fetch }) {
    try {
        let siteLogs: SiteLog[] = (await fetchJson('SiteLog', fetch)).data;
        // sort according to descending order
        siteLogs = siteLogs.sort((a, b) =>
            new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
        return { siteLogs };
    } catch (e) {
        throw error(404, (e as Error).message);
    }
}