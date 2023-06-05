<script lang="ts">
    import { Timeline, TimelineItem } from "flowbite-svelte";
    import MdiTask from "virtual:icons/mdi/file-tree";

    export let data;
    const { siteLogs } = data;
</script>

<div class="flex items-center justify-center h-half-screen">
    <p class="md:w-2/3 text-textPrimary-100 md:text-7xl text-5xl">Dev Logs</p>
</div>

<div
    class="mx-auto max-w-screen-lg mt-8 mb-8 bg-primary-900 p-4 rounded-2xl text-start"
>
    <Timeline>
        {#each siteLogs as siteLog, i}
            <TimelineItem
                date={new Date(siteLog.dateAdded).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
            >
                <p
                    class="mb-4 text-base font-normal text-textPrimary-400"
                >
                    {siteLog.description}
                </p>
            </TimelineItem>
        {/each}
    </Timeline>
</div>
