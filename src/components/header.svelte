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
    import { adminSiteUrl, navigationLinks, siteName } from "$lib/constant/constant";
    let hideDrawer = true;
</script>

<Navbar let:hidden class="!bg-primary-900">
    <NavBrand href="/">
        <img
            src="/images/logo.png"
            class="mr-3 h-10 sm:h-14"
            alt="WolfyBlog Logo"
        />
        <span
            class="self-center whitespace-nowrap sm:text-3xl text-textPrimary-400 font-semibold dark:text-white text-xl"
        >
            {siteName}
        </span>
    </NavBrand>
    <div class="flex md:order-2">
        <Button size="sm" btnClass="mr-1" href={adminSiteUrl}
            ><MdiTools class="text-textPrimary-400 text-2xl" />
        </Button>
        <NavHamburger
            on:click={() => (hideDrawer = !hideDrawer)}
            btnClass="md:hidden bg-textPrimary-400"
        />
    </div>
    <NavUl
        {hidden}
        nonActiveClass="text-textPrimary-300 text-lg rounded-lg hover:underline"
        activeClass="text-textPrimary-800 text-lg underline"
        class="order-1 flex-1 justify-evenly lg:mx-20"
    >
        <NavLi href="/" active={true}>{navigationLinks.Home}</NavLi>
        <NavLi id="nav-article"
            ><Chevron aligned>{navigationLinks.Articles}</Chevron></NavLi
        >
        <NavLi href="/albums">{navigationLinks.Albums}</NavLi>
        <NavLi href="/comments">{navigationLinks.Comments}</NavLi>
        <NavLi href="/siteLogs">{navigationLinks.SiteLogs}</NavLi>
        <NavLi href="/projects">{navigationLinks.Projects}</NavLi>
        <NavLi href="/about">{navigationLinks.About}</NavLi>
        <Dropdown triggeredBy="#nav-article" class="bg-primary-900 text-textPrimary-200">
            <DropdownItem class="hover:bg-primary-800" href="/articles">Search Articles</DropdownItem>
            <DropdownItem class="hover:bg-primary-800" href="/articles/categories">Search By Category</DropdownItem>
            <DropdownItem class="hover:bg-primary-800" href="/articles/tags">Search By Tags</DropdownItem>
        </Dropdown>
    </NavUl>
</Navbar>

<CustomDrawer {hideDrawer} />
