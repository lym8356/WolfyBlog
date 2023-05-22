<script lang="ts">
    export let data;
    const { articles } = data;
</script>

{#each articles as article}
    <div>
        <h3>{article.id}</h3>
        <p>{article.content}</p>
    </div>
{/each}
