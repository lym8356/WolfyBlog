<script lang="ts">
    import { Card } from "flowbite-svelte";

    export let data;
    const { projects } = data;
</script>

<div class="flex items-center justify-center h-half-screen">
    <p class="md:w-2/3 text-textPrimary-100 md:text-7xl text-5xl">Project</p>
</div>

<div class="mx-auto max-w-screen-xl mt-8 mb-8 bg-primary-900 p-4">
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols--1 gap-3">
        {#each projects as project}
            <Card
                href={project.link}
                img={project.cover}
                horizontal
                class="border-none overflow-hidden md:h-44"
                padding="none"
            >
                <div class="p-2">
                    <p
                        class="text-xl text-start font-bold tracking-tight text-primary-900"
                    >
                        {project.title}
                    </p>
                    <hr class="w-full" />
                    <p class="mb-3 mt-1 text-start leading-tight text-sm text-primary-900">
                        {project.description}
                    </p>
                </div>
            </Card>
        {/each}
    </div>
</div>
