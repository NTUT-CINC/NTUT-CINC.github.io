<script lang="ts">
    import CategoryList from './CategoryList.svelte';

    export let slug: string;
    export let title: string;
    export let categories: string[];
    export let createdOn: Date;
</script>

<a
    href="/blog/{slug}"
    class="mb-4 inline-block w-full rounded-md bg-slate-800 p-4 transition-all hover:bg-slate-700"
>
    <p>{createdOn.toLocaleDateString()}</p>
    <h1 class="font-heading text-2xl font-bold">{title}</h1>
    {#if categories.length > 0}
        <div class="my-2">
            <CategoryList {categories} />
        </div>
    {/if}
</a>
