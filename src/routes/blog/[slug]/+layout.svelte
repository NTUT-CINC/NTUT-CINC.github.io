<script lang="ts">
    // import type { LayoutData } from './$types';

    // export let data: LayoutData;
</script>

<div class="w-full">
    <a href="/blog" class="text-lg">Back</a>
</div>

<slot />

<!-- TODO: re-add this in the future -->
<!--
    <div class="w-2/12">
        <h2 class="font-bold">More Posts</h2>
        <ul>
            {#each data.summaries as { slug, title }}
                <li class="mb-2">
                    <a href="/blog/{slug}" class="text-cyan-600 underline">{title}</a>
                </li>
            {/each}
        </ul>
    </div>
-->
