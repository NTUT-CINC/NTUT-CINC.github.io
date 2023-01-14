<script lang="ts">
    import type { PageData } from './$types';
    import Summary from '$lib/Summary.svelte';

    export let data: PageData;
</script>

<div class="container">
    <h1 class="text-8xl font-bold font-mono">Blog</h1>
</div>

<ul>
    {#each data.summaries as { slug, title }}
        <li>
            <Summary {slug} {title} />
        </li>
    {/each}
</ul>
