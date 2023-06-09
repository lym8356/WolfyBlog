<script lang="ts">
    // import { Gallery } from "flowbite-svelte";
    // import ImageGallery from "@react2svelte/image-gallery";
    import {
        GalleryImage,
        GalleryThumbnail,
        LightboxGallery,
    } from "svelte-lightbox";
    import CustomContainer from "../../../components/CustomContainer.svelte";
    import CustomTitle from "../../../components/CustomTitle.svelte";

    export let data;
    // let isOverlayVisible = false;
    // let startIndex = 0;

    // function toggleOverlay() {
    //     isOverlayVisible = !isOverlayVisible;
    // }

    // function handleOverlayClick(event: MouseEvent) {
    //     const overlay: HTMLElement = event.target as HTMLElement;

    //     if (overlay.classList.contains("overlay")) {
    //         toggleOverlay();
    //     }
    // }

    const { album, albumPhotos } = data;
</script>

<CustomTitle titleString={album.title} />

<!-- <CustomContainer>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
        {#each albumPhotos as photo}
            <div>
                svelte-ignore a11y-click-events-have-key-events
                <img
                    class="md:h-64 max-w-full hover:cursor-pointer"
                    src={photo.src}
                    alt={photo.alt}
                    on:click={() => {
                        startIndex = photo.index;
                        toggleOverlay();
                    }}
                />
            </div>
        {/each}
    </div>
</CustomContainer> -->

<CustomContainer>
    <LightboxGallery
        arrowsConfig={{
            color: "#FFCC33",
            enableKeyboardControl: false,
            character: "loop",
        }}
        customization={{
            lightboxProps: { style: '' },
        }}
    >
        <svelte:fragment slot="thumbnail">
            <div
                class="grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center"
            >
                {#each albumPhotos as photo, i}
                    <GalleryThumbnail id={i}>
                        <div>
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                class="md:h-64 max-w-full"
                            />
                        </div>
                    </GalleryThumbnail>
                {/each}
            </div>
        </svelte:fragment>

        {#each albumPhotos as photo}
            <GalleryImage>
                <img
                    src={photo.src}
                    alt={photo.alt}
                />
            </GalleryImage>
        {/each}
    </LightboxGallery>
</CustomContainer>

<!-- {#if isOverlayVisible}
    svelte-ignore a11y-click-events-have-key-events
    <div class="overlay" on:click={handleOverlayClick}>
        <div class="w-full h-fit overflow-auto max-w-4xl">
            <ImageGallery
                items={albumPhotos}
                {startIndex}
                showPlayButton={false}
                lazyLoad={true}
            />
        </div>
    </div>
{/if} -->

<style>
    /* .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
    } */
</style>
