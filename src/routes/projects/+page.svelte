<script lang="ts">
    import { Card } from "flowbite-svelte";
    import CustomContainer from "../../components/CustomContainer.svelte";
    import CustomTitle from "../../components/CustomTitle.svelte";
    import { navigationLinks } from "$lib/constant/constant";

    export let data;
    const { projects } = data;
</script>

<CustomTitle titleString={navigationLinks.Projects} />

<CustomContainer>
    <div class="grid md:grid-cols-2 grid-cols-1 gap-3">
        {#each projects as project}
            <Card
                href={project.link}
                img={project.cover}
                horizontal
                class="border-none overflow-hidden md:h-44 bg-primary-100 hover:bg-textPrimary-100"
                padding="none"
            >
                <div class="p-2">
                    <p
                        class="text-xl text-start font-bold tracking-tight text-primary-900"
                    >
                        {project.title}
                    </p>
                    <hr class="w-full border-primary-900" />
                    <p class="mb-3 mt-1 text-start leading-tight text-sm text-primary-900">
                        {project.description}
                    </p>
                </div>
            </Card>
        {/each}
    </div>
</CustomContainer>