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
    <div class="prose prose-invert mb-5">
        <h1 class="font-heading">Blog</h1>
    </div>

    <div class="mb-5">
        <label for="search-box" class="sr-only">Search Box</label>
        <div class="relative">
            <div class="pointer-events-none absolute inset-y-0 left-0 ml-5 flex items-center">
                <FAIcon icon={faMagnifyingGlass} class="absolute text-slate-500" />
            </div>
            <input
                type="search"
                id="search-box"
                bind:value={searchInput}
                class="block w-full rounded-lg border-2 border-slate-700 bg-slate-900 py-2 pl-12
                    outline-none transition-all placeholder:text-slate-500 focus:border-slate-500"
                placeholder="Search"
            />
        </div>
    </div>

    {#if filteredSummaries.length > 0}
        {#each filteredSummaries as { searchTerms, ...props }}
            <Summary {...props} />
        {/each}
    {:else}
        <div class="my-32 text-center">
            <h1 class="text-4xl font-bold text-slate-700">No Results Found :(</h1>
        </div>
    {/if}
</div>
