import { backendURL } from "$lib/constant/constant";
import type { RequestEvent } from "../../$types";

export const POST = async ({ request }: RequestEvent) => {
    const requestBody = await request.json();
    // console.log(body);
    const response = await fetch(`${backendURL}/Comment`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    });
    if (!response.ok) {
        let errorMessage = 'Unknown error';
        try {
            const errorBody = await response.json();
            errorMessage = errorBody.message;
        } catch (e) {
            errorMessage = response.statusText;
        }
    return new Response(errorMessage, {status: 500})
    }
    return new Response(JSON.stringify(requestBody), { status: 200 })
}