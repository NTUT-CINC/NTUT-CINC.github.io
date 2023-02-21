<script lang="ts">
    import type { PageData } from './$types';
    import { marked } from 'marked';

    import SvelteMarkdown from 'svelte-markdown';
    import renderers from '$lib/markdown';
    import CategoryList from '$lib/CategoryList.svelte';

    export let data: PageData;

    const tokens = marked.lexer(data.content);
    const headings = tokens.filter((token) => token.type === 'heading') as marked.Tokens.Heading[];

    const toDateFormatString = (date: Date) => {
        return date.toLocaleDateString('en-us', {
            month: 'short',
            day: '2-digit',
            year: 'numeric'
        });
    };

    const toHref = (text: string) => {
        return '#' + text.toLowerCase().replaceAll(' ', '-');
    };
</script>

<svelte:head>
    <title>{data.title}</title>
</svelte:head>

<aside class="fixed right-0 hidden h-full w-1/4 px-5 pt-14 xl:block">
    <h1 class="my-2 text-lg font-bold">Table of Contents</h1>

    <ul class="flex h-full w-full flex-col space-y-2">
        {#each headings as heading}
            <li style="margin-left: {heading.depth - 1}rem;">
                <a
                    href={toHref(heading.text)}
                    class="text-emerald-400 underline decoration-emerald-400
                    transition-all hover:text-white hover:decoration-white"
                >
                    {heading.text}
                </a>
            </li>
        {/each}
    </ul>
</aside>

<div class="mx-auto mb-5 max-w-prose lg:text-lg">
    <p class="font-bold">
        {toDateFormatString(data.createdOn)}
    </p>

    {#if data.categories.length > 0}
        <div class="my-2">
            <CategoryList categories={data.categories} />
        </div>
    {/if}
</div>

<article
    class="prose prose-invert mx-auto w-full prose-a:text-emerald-400
    prose-a:transition-all hover:prose-a:text-white lg:prose-lg"
>
    <SvelteMarkdown source={data.content} {renderers} />
</article>
