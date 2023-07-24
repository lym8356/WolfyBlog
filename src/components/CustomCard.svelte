<script lang="ts">
    import { Card, Badge } from "flowbite-svelte";
    import type { Article } from "../lib/types";

    export let article: Article;

    function truncate(str: string, numOfLines: number) {
        const lines = str.split("\n");
        if (lines.length <= numOfLines) return str;

        return lines.slice(0, numOfLines).join("\n") + "...";
    }
</script>

<Card
    href="/articles/{article.titleSlug}"
    class="w-full !bg-primary-900 border-transparent hover:bg-primary-800 max-w-4xl"
    size="lg"
>
    <p class="text-2xl text-textPrimary-200 font-bold">{article.title}</p>
    <p class="text-md text-textPrimary-100 m-3">
        {truncate(article.content, 3)}
    </p>
    <div class="flex justify-between">
        <p class="text-sm text-textPrimary-200">
            {#if article.createdAt}
                {new Date(article.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
            {:else}
                Unknown date
            {/if}
        </p>
        <Badge large color="dark">{article.category.title}</Badge>
    </div>
</Card>
