import type { Fetch, FetchResponse } from "../types";

let url = "http://localhost:21777/api";

export const fetchJson = async (keyword: string, fetchSve: Fetch = fetch): Promise<FetchResponse> => {
    const response = await fetchSve(url + `/${keyword}`);
    if (!response.ok) {
        // response is not ok, parse the error message from the response body
        let errorMessage = 'Unknown error';
        try {
            const errorBody = await response.json(); 
            errorMessage = errorBody.message;
        } catch (e) {
            // If response body couldn't be parsed, use the status text as the error message
            errorMessage = response.statusText;
        }
        throw new Error(errorMessage);
    }

    const data = await response.json();
    const headers = response.headers;
    return { data, headers };
}