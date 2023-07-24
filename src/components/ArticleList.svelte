<script lang="ts">
    import { Table, TableBodyRow, TableBodyCell, P } from "flowbite-svelte";
    import { goto } from "$app/navigation";
    import type { Article } from "$lib/types";

    export let articles: Article[] = [];
</script>

<Table hoverable={true} noborder class="border-separate border-spacing-y-2">
    {#each articles as article}
        <TableBodyRow
            class="!bg-primary-800 hover:cursor-pointer rounded-lg hover:!bg-primary-700"
            on:click={() => goto(`/articles/${article.titleSlug}`)}
        >
            <TableBodyCell class="text-center text-textPrimary-200 text-lg"
                >{article.title}
            </TableBodyCell>
            <TableBodyCell
                class="text-right text-textPrimary-200 text-lg hidden md:block"
            >
                {#if article.createdAt}
                    {new Date(article.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                {:else}
                    Unknown date
                {/if}
            </TableBodyCell>
        </TableBodyRow>
    {/each}
</Table>
