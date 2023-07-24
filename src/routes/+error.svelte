<script>
    import { page } from "$app/stores";
    import { Button } from "flowbite-svelte";
</script>

<div
    class="flex items-center justify-center w-full min-h-[70vh] text-textPrimary-500 my-12 px-4"
>
    <div class="flex flex-col items-center w-full gap-8">
        {#if $page?.status}
            <h1
                class="text-9xl md:text-16xl w-full select-none text-center font-black text-textPrimary-200"
            >
                {$page?.status}
            </h1>
        {/if}

        <p class="text-3xl font-semibold text-center">
            You have discovered a secret place
        </p>
        {#if $page?.error?.message}
            <p>Error message: {$page?.error?.message}</p>
        {/if}

        {#if $page.status == 500}
            <p class="text-2xl md:px-12 text-center">
                Opps! Looks like there is something wrong with the server.
            </p>
        {:else}
            {#if $page.status == 429}
                <p class="text-2xl md:px-12 text-center">
                    Opps! We Can't process that many requests at a time. Slow down a bit.
                </p>
            {:else}
                <p class="text-2xl md:px-12 text-center">
                    Opps! You may have mistyped the address, or the page has
                    been moved to another URL.
                </p>
            {/if}

            <div class="flex flex-row justify-between gap-8">
                <Button
                    shadow
                    href="/"
                    size="xl"
                    class="bg-primary-900 hover:bg-textPrimary-400 text-textPrimary-400 hover:text-primary-900"
                >
                    Home
                </Button>
            </div>
        {/if}
    </div>
</div>
