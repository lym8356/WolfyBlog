/** @type {import('@sveltejs/kit').HandleFetch} */
export async function handleFetch({ event, request, fetch }) {

    let fetchResult: Response;
    try {
        fetchResult = await fetch(request);
    } catch (error) {
        // Log info from event and request here.
        console.log(error)
    } finally {
        fetchResult = await fetch(request);
    }
  
    return fetchResult;
  }