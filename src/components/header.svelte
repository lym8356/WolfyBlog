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
            WolfyBlog
        </span>
    </NavBrand>
    <div class="flex md:order-2">
        <Button size="sm" btnClass="mr-1"
            ><MdiTools class="text-textPrimary-400 text-2xl" /></Button
        >
        <NavHamburger
            on:click={() => hideDrawer = !hideDrawer}
            btnClass="md:hidden bg-textPrimary-400"
        />
    </div>
    <NavUl
        {hidden}
        nonActiveClass="text-textPrimary-300 text-lg rounded-lg hover:underline"
        activeClass="text-textPrimary-800 text-lg underline"
        class="order-1 flex-1 justify-evenly lg:mx-20"
    >
        <NavLi href="/" active={true}>Home</NavLi>
        <NavLi id="nav-article"><Chevron aligned>Articles</Chevron></NavLi>
        <NavLi href="/album">Albums</NavLi>
        <NavLi href="/comment">Comments</NavLi>
        <NavLi href="/siteLog">Site Logs</NavLi>
        <NavLi href="/project">Projects</NavLi>
        <NavLi href="/about">About</NavLi>
        <Dropdown triggeredBy="#nav-article">
            <DropdownItem>Search Articles</DropdownItem>
            <DropdownItem>Search By Category</DropdownItem>
            <DropdownItem>Search By Tags</DropdownItem>
        </Dropdown>
    </NavUl>
</Navbar>

<CustomDrawer {hideDrawer} />