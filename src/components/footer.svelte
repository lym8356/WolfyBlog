<script>
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
                    class="mb-5 text-md font-semibold text-textPrimary-400 uppercase"
                >
                    Quick Links
                </h2>
                <FooterLinkGroup
                    class="items-center text-sm text-textPrimary-200 sm:mb-0 mt-2 lg:mt-0 md:mt-0"
                >
                    <FooterLink liClass="mb-2" href="/">Articles</FooterLink>
                    <FooterLink liClass="mb-2" href="/">Albums</FooterLink>
                    <FooterLink liClass="mb-2" href="/">Comments</FooterLink>
                    <FooterLink href="/">Projects</FooterLink>
                </FooterLinkGroup>
            </div>
            <div>
                <h2
                    class="mb-5 text-md font-semibold text-textPrimary-400 uppercase"
                >
                    Site
                </h2>
                <FooterLinkGroup
                    class="items-center text-sm text-textPrimary-200 sm:mb-0 mt-2 lg:mt-0 md:mt-0"
                >
                    <FooterLink liClass="mb-2" href="/">Home</FooterLink>
                    <FooterLink liClass="mb-2" href="/">About</FooterLink>
                    <FooterLink href="/">Site Logs</FooterLink>
                </FooterLinkGroup>
            </div>
            <div>
                <h2
                    class="mb-5 text-md font-semibold text-textPrimary-400 uppercase"
                >
                    Social
                </h2>
                <FooterLinkGroup
                    class="items-center text-sm text-textPrimary-200 sm:mb-0 mt-2 lg:mt-0 md:mt-0"
                >
                    <FooterLink liClass="mb-2" href="/">Github</FooterLink>
                    <FooterLink href="/">Youtube</FooterLink>
                </FooterLinkGroup>
            </div>
        </div>
    </div>
    <hr
        class="my-6 border-textPrimary-500 sm:mx-auto dark:border-gray-700 lg:my-4 sm:my-6"
    />
    <A
        href="https://github.com/lym8356/WolfBlog"
        aClass="block text-xs text-center text-textPrimary-400 hover:underline"
        >Source Code</A
    >
    <FooterCopyright
        by="lym8356"
        spanClass="block text-sm text-textPrimary-400 text-center"
    />
</Footer>
