<script lang="ts">
    import type { LayoutData } from './$types';

    export let data: LayoutData;
</script>

<div class="flex">
    <main class="w-9/12">
        <slot />
    </main>

    <aside class="w-3/12">
        <h2>More Posts</h2>
        <ul>
            {#each data.summaries as { slug, title }}
                <li class="mb-2">
                    <a href="/blog/{slug}" class="text-blue-600 underline">{title}</a>
                </li>
            {/each}
        </ul>
    </aside>
</div>

<style>
    @media (min-width: 640px) {
        .layout {
            display: grid;
            gap: 2em;
            grid-template-columns: 1fr 16em;
        }
    }
</style>
