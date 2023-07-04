<script lang="ts">
    import { Timeline, TimelineItem } from "flowbite-svelte";
    import CustomContainer from "../../components/CustomContainer.svelte";
    import CustomTitle from "../../components/CustomTitle.svelte";
    import { navigationLinks } from "$lib/constant/constant";

    export let data;
    const { siteLogs } = data;
</script>

<CustomTitle titleString={navigationLinks.SiteLogs} />

<CustomContainer>
    <div class="text-start">
        <Timeline>
            {#each siteLogs as siteLog}
                <TimelineItem
                    date={new Date(siteLog.dateAdded).toLocaleDateString(
                        "en-US",
                        {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        }
                    )}
                >
                    <p class="mb-4 text-base font-normal text-textPrimary-400">
                        {siteLog.description}
                    </p>
                </TimelineItem>
            {/each}
        </Timeline>
    </div>
</CustomContainer>
