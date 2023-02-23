<script lang="ts">
    import CategoryList from './CategoryList.svelte';

    export let slug: string;
    export let title: string;
    export let categories: string[];
    export let createdOn: Date;
</script>

<div class="group relative flex w-full">
    <div class="absolute h-full w-1 -translate-x-3 overflow-hidden py-1">
        <div
            class="-mt-1 h-full -translate-y-full bg-emerald-400 transition-all
            group-hover:translate-y-1 group-hover:bg-emerald-400"
        />
    </div>

    <div class="w-full">
        <a href="/blog/{slug}" class="block w-full">
            <p class="font-mono text-neutral-300">
                {createdOn.toLocaleDateString()}
            </p>

            <h1 class="font-heading text-2xl font-bold">
                {title}
            </h1>
        </a>

        {#if categories.length > 0}
            <div class="my-2">
                <CategoryList {categories} />
            </div>
        {/if}
    </div>
</div>
