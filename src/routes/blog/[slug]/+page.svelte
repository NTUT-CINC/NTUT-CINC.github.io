<script lang="ts">
    import type { PageData } from './$types';

    import SvelteMarkdown, { type Renderers } from 'svelte-markdown';

    import Heading from '$lib/markdown/Heading.svelte';
    import CodeBlock from '$lib/markdown/CodeBlock.svelte';

    const renderers: Partial<Renderers> = {
        heading: Heading,
        code: CodeBlock
    };

    const toDateFormatString = (date: Date) => {
        return date.toLocaleDateString('en-us', {
            month: 'short',
            day: '2-digit',
            year: 'numeric'
        });
    };

    export let data: PageData;
</script>

<svelte:head>
    <title>{data.title}</title>
</svelte:head>

<div class="prose prose-invert prose-cyan w-full">
    <div>
        <span class="font-bold">{toDateFormatString(data.createdOn)}</span>
    </div>
    <SvelteMarkdown source={data.content} {renderers} />
</div>
