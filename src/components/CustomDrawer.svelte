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
    export let hideDrawer: boolean;
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
                <SidebarItem spanClass="m-0" activeClass="" class="w-fit !p-2 hover:bg-textPrimary-400">
                    <svelte:fragment slot="icon">
                        <MdiHome class="hover:text-primary-900 text-textPrimary-400 text-2xl" />
                    </svelte:fragment>
                </SidebarItem>
                <SidebarItem spanClass="m-0" class="w-fit !p-2 hover:bg-textPrimary-400">
                    <svelte:fragment slot="icon">
                        <MdiPost class="hover:text-primary-900 text-textPrimary-400 text-2xl" />
                    </svelte:fragment>
                </SidebarItem>
                <SidebarItem spanClass="m-0" class="w-fit !p-2 hover:bg-textPrimary-400">
                    <svelte:fragment slot="icon">
                        <MdiAlbum class="hover:text-primary-900 text-textPrimary-400 text-2xl" />
                    </svelte:fragment>
                </SidebarItem>
                <SidebarItem spanClass="m-0" class="w-fit !p-2 hover:bg-textPrimary-400">
                    <svelte:fragment slot="icon">
                        <MdiComment class="hover:text-primary-900 text-textPrimary-400 text-2xl" />
                    </svelte:fragment>
                </SidebarItem>
                <SidebarItem spanClass="m-0" class="w-fit !p-2 hover:bg-textPrimary-400">
                    <svelte:fragment slot="icon">
                        <MdiArchive class="hover:text-primary-900 text-textPrimary-400 text-2xl" />
                    </svelte:fragment>
                </SidebarItem>
                <SidebarItem spanClass="m-0" class="w-fit !p-2 hover:bg-textPrimary-400">
                    <svelte:fragment slot="icon">
                        <MdiTask class="hover:text-primary-900 text-textPrimary-400 text-2xl" />
                    </svelte:fragment>
                </SidebarItem>
                <SidebarItem spanClass="m-0" class="w-fit !p-2 hover:bg-textPrimary-400">
                    <svelte:fragment slot="icon">
                        <MdiInformation class="hover:text-primary-900 text-textPrimary-400 text-2xl" />
                    </svelte:fragment>
                </SidebarItem>
            </SidebarGroup>
        </SidebarWrapper>
    </Sidebar>
</Drawer>
