<script>
    import { gitHub, navigationLinks, siteGitHub, youtube } from "$lib/constant/constant";
    import {
        Footer,
        FooterCopyright,
        FooterLinkGroup,
        FooterLink,
        FooterBrand,
        A,
    } from "flowbite-svelte";
</script>

<Footer footerType="socialmedia" class="rounded-none !bg-primary-900 sm:p-5">
    <div class="md:flex md:justify-around">
        <div class="mb-6 md:mb-0 flex">
            <FooterBrand
                imgClass="h-16 mr-3"
                spanClass="self-center text-4xl font-semibold whitespace-nowrap text-textPrimary-400"
                href="#"
                src="/images/logo.png"
                alt="WolfyBlog Logo"
                name="WolfyBlog"
            />
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-14 md:grid-cols-3 md:w-1/3">
            <div>
                <h2
                    class="mb-5 text-md font-semibold text-textPrimary-400 uppercase toc-exclude"
                >
                    Quick Links
                </h2>
                <FooterLinkGroup
                    class="items-center text-sm text-textPrimary-200 sm:mb-0 mt-2 lg:mt-0 md:mt-0"
                >
                    <FooterLink liClass="mb-2" href={navigationLinks.ArticlesURL}>
                        {navigationLinks.Articles}
                    </FooterLink>
                    <FooterLink liClass="mb-2" href={navigationLinks.AlbumURL}>{navigationLinks.Albums}</FooterLink>
                    <FooterLink liClass="mb-2" href={navigationLinks.DiscussionURL}>{navigationLinks.Discussion}</FooterLink>
                    <FooterLink href={navigationLinks.ProjectURL}>{navigationLinks.Projects}</FooterLink>
                </FooterLinkGroup>
            </div>
            <div>
                <h2
                    class="mb-5 text-md font-semibold text-textPrimary-400 uppercase toc-exclude"
                >
                    Site
                </h2>
                <FooterLinkGroup
                    class="items-center text-sm text-textPrimary-200 sm:mb-0 mt-2 lg:mt-0 md:mt-0"
                >
                    <FooterLink liClass="mb-2" href={navigationLinks.HomeURL}>{navigationLinks.Home}</FooterLink>
                    <FooterLink liClass="mb-2" href={navigationLinks.AboutURL}>{navigationLinks.About}</FooterLink>
                    <FooterLink href={navigationLinks.SiteLogURL}>{navigationLinks.SiteLogs}</FooterLink>
                </FooterLinkGroup>
            </div>
            <div>
                <h2
                    class="mb-5 text-md font-semibold text-textPrimary-400 uppercase toc-exclude"
                >
                    Social
                </h2>
                <FooterLinkGroup
                    class="items-center text-sm text-textPrimary-200 sm:mb-0 mt-2 lg:mt-0 md:mt-0"
                >
                    <FooterLink liClass="mb-2" href={gitHub}>Github</FooterLink>
                    <FooterLink href={youtube}>Youtube</FooterLink>
                </FooterLinkGroup>
            </div>
        </div>
    </div>
    <hr
        class="my-6 border-textPrimary-500 sm:mx-auto dark:border-gray-700 lg:my-4 sm:my-6"
    />
    <A
        href={siteGitHub}
        aClass="block text-xs text-center !text-textPrimary-400 hover:underline"
        >Source Code</A
    >
    <FooterCopyright
        by="lym8356"
        spanClass="block text-sm text-textPrimary-400 text-center"
    />
</Footer>
