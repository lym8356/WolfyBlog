<script lang="ts">
    import {
        Drawer,
        Sidebar,
        SidebarWrapper,
        SidebarGroup,
        SidebarItem,
    } from "flowbite-svelte";
    import MdiHome from "virtual:icons/mdi/home";
    import MdiPost from "virtual:icons/mdi/post";
    import MdiAlbum from "virtual:icons/mdi/image-album";
    import MdiComment from "virtual:icons/mdi/comment-text";
    import MdiArchive from "virtual:icons/mdi/archive";
    import MdiInformation from "virtual:icons/mdi/information";
    import MdiTask from "virtual:icons/mdi/calendar-check";
    import { page } from "$app/stores";
    import { onDestroy } from "svelte";
    import { navigationLinks } from "$lib/constant/constant";
    export let hideDrawer: boolean;

    let activelURL: string | null;
    const subscriber = page.subscribe(
        (currentPage) => (activelURL = currentPage.route.id)
    );

    onDestroy(subscriber);
</script>

<Drawer
    placement="right"
    transitionType="fly"
    bind:hidden={hideDrawer}
    width="w-16"
    class="!bg-primary-900 !p-0"
>
    <Sidebar>
        <SidebarWrapper divClass="overflow-y-auto py-4 rounded">
            <SidebarGroup class="px-2">
                <SidebarItem
                    href={navigationLinks.HomeURL}
                    active={activelURL === navigationLinks.HomeURL}
                    spanClass="m-0"
                    aClass="flex items-center p-2 text-base font-normal text-textPrimary-400 rounded-lg"
                    class="w-fit !p-2"
                    activeClass="flex items-center p-2 text-primary-900 bg-textPrimary-400 rounded-lg"
                >
                    <svelte:fragment slot="icon">
                        <MdiHome class="hover:text-primary-900 text-2xl" />
                    </svelte:fragment>
                </SidebarItem>
                <SidebarItem
                    href={navigationLinks.ArticlesURL}
                    active={activelURL === navigationLinks.ArticlesURL}
                    spanClass="m-0"
                    aClass="flex items-center p-2 text-base font-normal text-textPrimary-400 rounded-lg"
                    class="w-fit !p-2"
                    activeClass="flex items-center p-2 text-primary-900 bg-textPrimary-400 rounded-lg"
                >
                    <svelte:fragment slot="icon">
                        <MdiPost class="hover:text-primary-900 text-2xl" />
                    </svelte:fragment>
                </SidebarItem>
                <SidebarItem
                    href={navigationLinks.AlbumURL}
                    active={activelURL === navigationLinks.AlbumURL}
                    spanClass="m-0"
                    aClass="flex items-center p-2 text-base font-normal text-textPrimary-400 rounded-lg"
                    class="w-fit !p-2"
                    activeClass="flex items-center p-2 text-primary-900 bg-textPrimary-400 rounded-lg"
                >
                    <svelte:fragment slot="icon">
                        <MdiAlbum class="hover:text-primary-900 text-2xl" />
                    </svelte:fragment>
                </SidebarItem>
                <SidebarItem
                    href={navigationLinks.DiscussionURL}
                    active={activelURL === navigationLinks.DiscussionURL}
                    spanClass="m-0"
                    aClass="flex items-center p-2 text-base font-normal text-textPrimary-400 rounded-lg"
                    class="w-fit !p-2"
                    activeClass="flex items-center p-2 text-primary-900 bg-textPrimary-400 rounded-lg"
                >
                    <svelte:fragment slot="icon">
                        <MdiComment class="hover:text-primary-900 text-2xl" />
                    </svelte:fragment>
                </SidebarItem>
                <SidebarItem
                    href={navigationLinks.SiteLogURL}
                    active={activelURL === navigationLinks.SiteLogURL}
                    spanClass="m-0"
                    aClass="flex items-center p-2 text-base font-normal text-textPrimary-400 rounded-lg"
                    class="w-fit !p-2"
                    activeClass="flex items-center p-2 text-primary-900 bg-textPrimary-400 rounded-lg"
                >
                    <svelte:fragment slot="icon">
                        <MdiArchive class="hover:text-primary-900 text-2xl" />
                    </svelte:fragment>
                </SidebarItem>
                <SidebarItem
                    href={navigationLinks.ProjectURL}
                    active={activelURL === navigationLinks.ProjectURL}
                    spanClass="m-0"
                    aClass="flex items-center p-2 text-base font-normal text-textPrimary-400 rounded-lg"
                    class="w-fit !p-2"
                    activeClass="flex items-center p-2 text-primary-900 bg-textPrimary-400 rounded-lg"
                >
                    <svelte:fragment slot="icon">
                        <MdiTask class="hover:text-primary-900 text-2xl" />
                    </svelte:fragment>
                </SidebarItem>
                <SidebarItem
                    href={navigationLinks.AboutURL}
                    active={activelURL === navigationLinks.AboutURL}
                    spanClass="m-0"
                    aClass="flex items-center p-2 text-base font-normal text-textPrimary-400 rounded-lg"
                    class="w-fit !p-2"
                    activeClass="flex items-center p-2 text-primary-900 bg-textPrimary-400 rounded-lg"
                >
                    <svelte:fragment slot="icon">
                        <MdiInformation
                            class="hover:text-primary-900 text-2xl"
                        />
                    </svelte:fragment>
                </SidebarItem>
            </SidebarGroup>
        </SidebarWrapper>
    </Sidebar>
</Drawer>
