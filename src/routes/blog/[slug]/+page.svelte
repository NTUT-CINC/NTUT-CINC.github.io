<script lang="ts">
    import type { PageData } from './$types';

    import 'highlight.js/styles/github-dark.css';

    export let data: PageData;
</script>

<div class="post">
    {@html data.html}
    <!-- <SvelteMarkdown source={data.content} /> -->
</div>

<!-- Pass css rules to markdown child -->
<style>
    :global(.post > *) {
        @apply mb-3;
    }
    :global(.post > h1) {
        @apply text-red-500 text-3xl;
    }
    :global(.post > p > code) {
        @apply px-1 pt-1 text-sm rounded-md bg-slate-700;
    }
    :global(.post > pre) {
        @apply w-2/3 px-3 py-3 rounded-lg bg-slate-800;
    }
    :global(.post > table) {
        @apply table-fixed w-auto p-3 rounded-sm bg-slate-800;
    }
    :global(.post * tr) {
        @apply py-5;
    }
    :global(.post * th) {
        @apply text-center px-3;
    }
    :global(.post * td) {
        @apply text-center px-3 border-t-2 border-slate-700;
    }
</style>
