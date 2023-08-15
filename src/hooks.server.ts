import * as Sentry from '@sentry/node';


Sentry.init({});

/** @type {import('@sveltejs/kit').HandleServerError} */
export async function handleError({ error, event }) {
    const errorId = crypto.randomUUID();
    // example integration with https://sentry.io/
    Sentry.captureException(error, { extra: { event, errorId } });
    console.log(error)
    return {
      message: (error as Error).message
    };
  }

/** @type {import('@sveltejs/kit').HandleFetch} */
export async function handleFetch({ request, fetch }) {

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