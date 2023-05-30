import type { Fetch } from "../types";

let url = "http://localhost:21777/api";

export const fetchJson = async (keyword: string, fetchSve: Fetch = fetch) => {
    const response = await fetchSve(url + `/${keyword}`);
    return await response.json();
}