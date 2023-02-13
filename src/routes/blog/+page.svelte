<script lang="ts">
    import type { PageData } from './$types';

    import FAIcon from 'svelte-fa';
    import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

    import Summary from '$lib/Summary.svelte';

    export let data: PageData;

    let searchInput = '';

    $: filteredSummaries = data.summaries.filter((summary) => {
        // TODO: Implement regex or fuzzy search
        return summary.searchTerms.includes(searchInput.toLowerCase());
    });
</script>

<svelte:head>
    <title>Blog</title>
</svelte:head>

<div class="mx-auto w-full max-w-prose lg:text-lg">
    <div class="prose prose-invert mb-5 lg:prose-lg">
        <h1 class="font-heading">Blog</h1>
    </div>

    <div class="mb-5">
        <label for="search-box" class="sr-only">Search Box</label>
        <div class="relative">
            <div
                class="pointer-events-none absolute inset-y-0
                left-0 ml-5 flex items-center text-neutral-600"
            >
                <FAIcon icon={faMagnifyingGlass} class="absolute" />
            </div>

            <input
                type="search"
                id="search-box"
                bind:value={searchInput}
                class="block w-full rounded-lg border-2 border-neutral-700
                bg-black py-2 pl-12 outline-none transition-all
                placeholder:font-heading placeholder:text-neutral-500
                hover:border-neutral-500 focus:border-emerald-400"
                placeholder="Search"
            />
        </div>
    </div>

    {#if filteredSummaries.length > 0}
        <div class="flex flex-col space-y-5 px-2">
            {#each filteredSummaries as { searchTerms, ...props }}
                <Summary {...props} />
            {/each}
        </div>
    {:else}
        <div class="my-32 text-center">
            <span class="select-none text-6xl font-bold text-neutral-700">
                No Results Found <br />
                ¯\_(ツ)_/¯
            </span>
        </div>
    {/if}
</div>
