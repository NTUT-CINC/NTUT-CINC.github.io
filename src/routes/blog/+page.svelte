<script lang="ts">
    import type { PageData } from './$types';
    import Summary from '$lib/Summary.svelte';

    export let data: PageData;
</script>

<svelte:head>
    <title>Blog</title>
</svelte:head>

<div class="flex flex-col items-center px-5">
    <div class="prose prose-invert prose-cyan w-full">
        <h1>Blog</h1>

        <div class="not-prose">
            {#each data.summaries as props}
                <Summary {...props} />
            {/each}
        </div>
    </div>
</div>
