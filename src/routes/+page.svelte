<script lang="ts">
    import { wolfPoems } from "../lib/constant/poem";
    import CustomCard from "../components/CustomCard.svelte";
    import { Avatar, Card, A, Badge } from "flowbite-svelte";
    import MdiGitHub from "virtual:icons/mdi/github";
    import MdiYoutube from "virtual:icons/mdi/youtube";
    import MdiLinkedIn from "virtual:icons/mdi/linkedin";
    import MdiBell from "virtual:icons/mdi/bell";
    import MdiChartLine from "virtual:icons/mdi/chart-line";
    import { authorName, siteDescription, siteName, siteUrl } from "$lib/constant/constant";


    export let data;
    $: ({ articles, categories, tags, articleCount } = data);

    const randomLine = wolfPoems[Math.floor(Math.random() * wolfPoems.length)];

    // typing effect
    let displayText = "";
    let index = 0;
    const typeWriter = () => {
        if (index < randomLine.length) {
            displayText += randomLine.charAt(index);
            index++;
            setTimeout(typeWriter, 20);
        }
    };

    typeWriter();
</script>


<svelte:head>
    <title>{siteName}</title>
    <meta content={siteName} property="og:title" />
    <meta content={siteUrl} property="og:url" />
	<meta content={siteDescription} property="og:description" />
	<meta content={siteName} property="og:site_name" />
</svelte:head>

<div class="flex items-center justify-center h-screen">
    <p class="md:w-2/3 text-textPrimary-100 md:text-2xl text-sm">
        {displayText}
        <span class="cursor">|</span>
    </p>
</div>

<div class="flex justify-center space-x-5">
    <!-- blog list container  -->
    <div class="lg:w-2/5 md:w-3/5 flex flex-col gap-3 items-center mb-2">
        {#each articles as article (article.id)}
            <CustomCard {article} />
        {/each}
    </div>
    <!-- other info container  -->
    <div class="lg:w-1/4 md:w-1/3 md:flex flex-col gap-3 hidden">
        <Card
            class="max-w-2xl w-full !bg-primary-900 border-transparent hover:bg-primary-800 p-2 !pb-0"
        >
            <div class="flex flex-col items-center pb-4">
                <Avatar size="lg" src="./images/wolfy.png" />
                <p class="text-lg text-primary-200 mt-1">{authorName}</p>
                <div
                    class="flex w-full mt-3 justify-evenly text-textPrimary-200 mr-3"
                >
                    <div>
                        <p>Articles</p>
                        <p>{articleCount}</p>
                    </div>
                    <div>
                        <p>Categories</p>
                        <p>{categories.length}</p>
                    </div>
                    <div>
                        <p>Tags</p>
                        <p>{tags.length}</p>
                    </div>
                </div>
                <div />
            </div>
            <hr />
            <div class="flex w-full mt-2 justify-center pb-3 space-x-3">
                <A><MdiGitHub class="text-xl text-textPrimary-100" /></A>
                <A><MdiYoutube class="text-xl text-textPrimary-100" /></A>
                <A><MdiLinkedIn class="text-xl text-textPrimary-100" /></A>
            </div>
        </Card>
        <Card
            class="max-w-2xl w-full !bg-primary-900 border-transparent hover:bg-primary-800 py-2"
        >
            <div class="flex justify-items-start">
                <MdiBell class="text-lg text-textPrimary-500" />
                <span class="text-textPrimary-300 ml-2">Notification</span>
            </div>
            <p class="text-left mt-1 text-textPrimary-100">
                {data.notification.content}
            </p>
        </Card>
        <Card
            class="max-w-2xl w-full !bg-primary-900 border-transparent hover:bg-primary-800 py-2"
        >
            <div class="flex justify-items-start">
                <MdiChartLine class="text-lg text-textPrimary-500" />
                <span class="text-textPrimary-300 ml-2">Statistics</span>
            </div>
            <div class="text-left flex justify-between">
                <span class="text-md text-textPrimary-100">Website Uptime:</span
                >
                <span class="text-md text-textPrimary-100">54 days</span>
            </div>
            <div class="text-left flex justify-between">
                <span class="text-md text-textPrimary-100">Visitor Counts:</span
                >
                <span class="text-md text-textPrimary-100">361</span>
            </div>
        </Card>
        <Card
            class="max-w-2xl w-full !bg-primary-900 border-transparent hover:bg-primary-800 py-2 mb-2"
        >
            <div class="grid lg:grid-cols-4 grid-cols-2 gap-2">
                {#each tags as tag}
                    <Badge large color="dark">
                        {tag.title}
                    </Badge>
                {/each}
            </div>
        </Card>
    </div>
</div>

<style>
    .cursor {
        animation: blink 1s infinite;
    }

    @keyframes blink {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>
