<script lang="ts">
    import type { PageData } from './$types';

    import SvelteMarkdown from 'svelte-markdown';

    export let data: PageData;
</script>

<div class="post">
    <SvelteMarkdown source={data.content} />
</div>

<!-- Pass css rules to markdown child -->
<style>
    :global(.post > h1) {
        @apply text-red-500;
        @apply text-3xl;
    }
</style>
