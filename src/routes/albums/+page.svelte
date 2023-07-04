<script lang="ts">
    import { navigationLinks } from "$lib/constant/constant";
    import { Card } from "flowbite-svelte";
    import CustomContainer from "../../components/CustomContainer.svelte";
    import CustomTitle from "../../components/CustomTitle.svelte";

    export let data;
    const { albums } = data;
</script>

<CustomTitle titleString={navigationLinks.Albums} />

<CustomContainer>
    <div class="grid md:grid-cols-2 grid-cols--1 gap-3">
        {#each albums as album}
            <Card
                href="/album/{album.id}"
                img={album.cover}
                horizontal
                class="border-none overflow-hidden md:h-44 bg-primary-100 hover:bg-textPrimary-100"
                padding="none"
            >
                <div class="p-2">
                    <p
                        class="text-xl text-start font-bold tracking-tight text-primary-900"
                    >
                        {album.title}
                    </p>
                    <hr class="w-full border-primary-900" />
                    <p
                        class="mb-3 mt-1 text-start leading-tight text-sm text-primary-900"
                    >
                        {album.description}
                    </p>
                </div>
            </Card>
        {/each}
    </div>
</CustomContainer>
