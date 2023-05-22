<script lang="ts">
    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
        Button,
    } from "flowbite-svelte";
    import { WrenchScrewdriver } from "svelte-heros-v2";
</script>

<Navbar let:hidden let:toggle class="!bg-primary-800">
    <NavBrand href="/">
        <img
            src="./images/logo.png"
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
        <Button size="sm" btnClass="mr-1"><WrenchScrewdriver class="text-textPrimary-400" size="35" /></Button>
        <NavHamburger
            on:click={toggle}
            btnClass="md:hidden bg-textPrimary-400"
        />
    </div>
    <NavUl
        {hidden}
        nonActiveClass="text-textPrimary-300 text-lg rounded-lg hover:underline"
        activeClass="text-textPrimary-800 text-lg underline"
        ulClass="flex flex-col p-4 mt-4 md:flex-row md:space-x-14 md:mt-0 md:text-sm md:font-medium bg-primary-800 md:border-none border-textPrimary-800 order-1"
    >
        <NavLi href="/" active={true}>Home</NavLi>
        <NavLi href="/article">Articles</NavLi>
        <NavLi href="/album">Albums</NavLi>
        <NavLi href="/comment">Comments</NavLi>
        <NavLi href="/siteLog">Site Logs</NavLi>
        <NavLi href="/project">Projects</NavLi>
        <NavLi href="/about">About</NavLi>
    </NavUl>
</Navbar>
