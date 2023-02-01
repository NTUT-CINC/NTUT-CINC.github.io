<script lang="ts">
    export let slug: string;
    export let title: string;
    export let createdOn: Date;
</script>

<a
    href="/blog/{slug}"
    class="inline-block w-full mb-4 p-4 rounded-md bg-slate-800 hover:bg-slate-700 transition-all"
>
    <p>{createdOn.toLocaleDateString()}</p>
    <h1 class="text-3xl font-bold">{title}</h1>
    <p class="text-slate-400">Some preview text here</p>
</a>
