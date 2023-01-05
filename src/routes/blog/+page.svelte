<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<div class="container">
    <h1 class="text-8xl font-bold font-mono">Blog</h1>
</div>

<ul>
    {#each data.summaries as { slug, title }}
        <li>
            <a href="/blog/{slug}" class="text-blue-600 underline">{title}</a>
        </li>
    {/each}
</ul>
