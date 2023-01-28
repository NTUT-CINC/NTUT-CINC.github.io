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
    <div>
        <span class="font-bold">{toDateFormatString(data.createdOn)}</span>
    </div>

    <SvelteMarkdown source={data.content} {renderers} />
</div>
