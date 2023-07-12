<script lang="ts">
    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
        Button,
        Dropdown,
        DropdownItem,
        Chevron,
    } from "flowbite-svelte";
    import MdiTools from "virtual:icons/mdi/tools";
    import CustomDrawer from "./CustomDrawer.svelte";
    import {
        adminSiteUrl,
        navigationLinks,
        siteName,
    } from "$lib/constant/constant";
    import { page } from "$app/stores";
    import { onDestroy } from "svelte";
    let hideDrawer = true;

    let activelURL: string | null;
    const subscriber = page.subscribe(
        (currentPage) => (activelURL = currentPage.route.id)
    );

    onDestroy(subscriber);
</script>

<Navbar let:hidden class="!bg-primary-900">
    <NavBrand href="/">
        <img
            src="/images/logo.png"
            class="mr-3 h-10 md:h-12 lg:h-14"
            alt="WolfyBlog Logo"
        />
        <span
            class="self-center whitespace-nowrap lg:text-3xl md:text-base text-textPrimary-400 font-semibold"
        >
            {siteName}
        </span>
    </NavBrand>
    <div class="flex md:order-2">
        <Button size="sm" btnClass="mr-1" class="bg-transparent" href={adminSiteUrl}
            ><MdiTools class="text-textPrimary-400 text-xl" />
        </Button>
        <NavHamburger
            on:click={() => (hideDrawer = !hideDrawer)}
            btnClass="md:hidden bg-textPrimary-400"
        />
    </div>
    <NavUl
        {hidden}
        nonActiveClass="text-textPrimary-300 lg:text-lg md:text-md rounded-lg hover:underline"
        activeClass="text-textPrimary-800 lg:text-lg underline"
        class="grow"
        ulClass="flex flex-col p-4 mt-4 md:flex-row lg:space-x-14 md:space-x-3 md:mt-0 md:text-md md:font-medium justify-center"
    >
        <NavLi href="/" active={activelURL === navigationLinks.HomeURL}
            >{navigationLinks.Home}</NavLi
        >
        <NavLi
            id="nav-article"
            active={activelURL === navigationLinks.ArticlesURL}
            ><Chevron aligned>{navigationLinks.Articles}</Chevron></NavLi
        >
        <NavLi
            href={navigationLinks.AlbumURL}
            active={activelURL === navigationLinks.AlbumURL}
        >
            {navigationLinks.Albums}
        </NavLi>
        <NavLi
            href={navigationLinks.DiscussionURL}
            active={activelURL === navigationLinks.DiscussionURL}
        >
            {navigationLinks.Discussion}
        </NavLi>
        <NavLi
            href={navigationLinks.SiteLogURL}
            active={activelURL === navigationLinks.SiteLogURL}
        >
            {navigationLinks.SiteLogs}
        </NavLi>
        <NavLi
            href={navigationLinks.ProjectURL}
            active={activelURL === navigationLinks.ProjectURL}
        >
            {navigationLinks.Projects}
        </NavLi>
        <NavLi
            href={navigationLinks.AboutURL}
            active={activelURL === navigationLinks.AboutURL}
        >
            {navigationLinks.About}
        </NavLi>
        <Dropdown
            triggeredBy="#nav-article"
            class="bg-primary-900 text-textPrimary-200"
        >
            <DropdownItem class="hover:bg-primary-800" href="/articles"
                >Search Articles</DropdownItem
            >
            <DropdownItem
                class="hover:bg-primary-800"
                href="/articles/categories">Search By Category</DropdownItem
            >
            <DropdownItem class="hover:bg-primary-800" href="/articles/tags"
                >Search By Tags</DropdownItem
            >
        </Dropdown>
    </NavUl>
</Navbar>

<CustomDrawer {hideDrawer} />
