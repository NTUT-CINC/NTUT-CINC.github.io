<script lang="ts">
    import type { PageData } from './$types';

    import SvelteMarkdown from 'svelte-markdown';
    import renderers from '$lib/markdown';
    import CategoryList from '$lib/CategoryList.svelte';

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

<div class="mx-auto mb-5 max-w-prose lg:text-lg">
    <p class="font-bold">{toDateFormatString(data.createdOn)}</p>
    {#if data.categories.length > 0}
        <div class="my-2">
            <CategoryList categories={data.categories} />
        </div>
    {/if}
</div>

<article class="prose prose-invert mx-auto w-full lg:prose-lg">
    <SvelteMarkdown source={data.content} {renderers} />
</article>
