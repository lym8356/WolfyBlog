<script lang="ts">
    import { TabItem, Tabs } from "flowbite-svelte";

    export let data;
</script>

<div class="flex items-center justify-center h-half-screen">
    <p class="md:w-2/3 text-textPrimary-100 md:text-7xl text-5xl">
        About
    </p>
</div>

<div class="mx-auto max-w-screen-xl mt-8 mb-8">
    <Tabs
        style="full"
        contentClass="mt-4"
        defaultClass="flex rounded-lg divide-x divide-primary-900 shadow"
    >
        <TabItem
            open
            title="About Me"
            class="w-full"
            activeClasses="p-4 text-primary-900 bg-textPrimary-500 w-full rounded-l-lg text-xl"
            inactiveClasses="p-4 !text-textPrimary-400 bg-primary-900 rounded-l-lg w-full text-xl"
        >
            <div
                class="prose prose-invert lg:prose-lg text-justify text-textPrimary-400 prose-headings:text-textPrimary-200 bg-primary-900 rounded-2xl p-4"
            >
                {@html data.aboutPages[0].content}
            </div>
        </TabItem>
        <TabItem
            title="About Site"
            class="w-full"
            activeClasses="p-4 text-primary-900 bg-textPrimary-500 w-full rounded-r-lg text-xl"
            inactiveClasses="p-4 !text-textPrimary-400 bg-primary-900 rounded-r-lg w-full text-xl"
        >
            <div
                class="prose prose-invert lg:prose-lg text-justify text-textPrimary-400 prose-headings:text-textPrimary-200 bg-primary-900 rounded-2xl p-4"
            >
                {@html data.aboutPages[1].content}
            </div>
        </TabItem>
    </Tabs>
</div>

<style>
    .prose {
        max-width: 100%;
    }
</style>
