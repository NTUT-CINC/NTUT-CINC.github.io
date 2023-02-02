<script lang="ts">
    import type { PageData } from './$types';

    import SvelteMarkdown from 'svelte-markdown';
    import renderers from '$lib/markdown';

    export let data: PageData;

    const toDateFormatString = (date: Date) => {
        return date.toLocaleDateString('en-us', {
            month: 'short',
            day: '2-digit',
            year: 'numeric'
        });
    };
</script>

<svelte:head>
    <title>{data.title}</title>
</svelte:head>

<div class="prose prose-lg prose-invert w-full">
    <div class="not-prose">
        <p class="font-bold">{toDateFormatString(data.createdOn)}</p>
        <div class="my-2">
            {#each data.categories as category}
                <span class="mr-2 rounded-full bg-slate-600 py-1 px-2">{category}</span>
            {/each}
        </div>
    </div>

    <SvelteMarkdown source={data.content} {renderers} />
</div>
