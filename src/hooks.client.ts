export function handleError({ error }) {
    console.log(error)
    return { message: (error as Error).message }
}