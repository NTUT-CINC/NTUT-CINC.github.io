<script lang="ts">
    export let slug: string;
    export let title: string;
    export let createdOn: Date;
</script>

<a
    href="/blog/{slug}"
    class="mb-4 inline-block w-full rounded-md bg-slate-800 p-4 transition-all hover:bg-slate-700"
>
    <p>{createdOn.toLocaleDateString()}</p>
    <h1 class="text-3xl font-bold">{title}</h1>
    <p class="text-slate-400">Some preview text here</p>
</a>
