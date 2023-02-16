<!-- TODO: Add colors for each category option -->
<script lang="ts">
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';

    export let categories: string[];

    const handleClick = async (category: string) => {
        let url = new URL('/blog', $page.url.origin);

        url.searchParams.set('searchTerm', category);

        goto(url.toString(), { replaceState: false });
    };
</script>

<div class="flex">
    {#each categories as category}
        <button
            on:click={() => handleClick(category)}
            class="mr-2 rounded-full bg-emerald-400 px-2 font-mono text-sm
            font-bold text-black transition-all hover:bg-neutral-800 hover:text-white"
        >
            {category}
        </button>
    {/each}
</div>
