<script lang="ts">
    import { toclink, type TocStore } from "@svelte-put/toc";
    export let tocStore: TocStore;
</script>

{#if Object.values($tocStore.items).length}
    <ul class="flex flex-col items-center">
        {#each Object.values($tocStore.items) as tocItem}
            <li
                class="max-w-2/3 w-fit bg-primary-900 text-textPrimary-400 hover:bg-primary-800 rounded-xl my-1"
            >
                <!-- svelte-ignore a11y-missing-attribute -->
                <!-- svelte-ignore a11y-missing-content -->
                <a
                    class="w-full block h-full p-2 markdown-nav-link"
                    use:toclink={{
                        store: tocStore,
                        tocItem,
                        observe: true,
                    }}
                />
            </li>
        {/each}
    </ul>
{/if}

