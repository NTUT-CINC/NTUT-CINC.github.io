<script lang="ts">
    import type { PageData } from './$types';

    import SvelteMarkDown, { type Renderers } from 'svelte-markdown';

    import Heading from '$lib/md-renderers/Heading.svelte';
    import CodeSpan from '$lib/md-renderers/CodeSpan.svelte';
    import CodeBlock from '$lib/md-renderers/CodeBlock.svelte';

    const renderers: Partial<Renderers> = {
        heading: Heading,
        code: CodeBlock,
        codespan: CodeSpan
    };

    export let data: PageData;
</script>

<div class="post p-5 w-full">
    <SvelteMarkDown source={data.content} {renderers} />
    <!-- <SvelteMarkdown source={data.content} /> -->
</div>

<!-- Pass css rules to markdown child -->
<style>
    .post :global(> *) {
        @apply mb-3;
    }
    .post :global(table) {
        @apply table-fixed w-auto p-3 rounded-sm bg-slate-800;
    }
    .post :global(tr) {
        @apply py-5;
    }
    .post :global(th) {
        @apply text-center px-3;
    }
    .post :global(td) {
        @apply text-center px-3 border-t-2 border-slate-700;
    }
</style>
