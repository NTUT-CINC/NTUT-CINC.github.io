<script lang="ts">
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
    <h1 class="text-3xl font-bold">{title}</h1>
    <div class="my-2">
        {#each categories as category}
            <span class="mr-2 rounded-full bg-slate-600 py-1 px-2">{category}</span>
        {/each}
    </div>
</a>
