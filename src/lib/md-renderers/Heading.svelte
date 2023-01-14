<script lang="ts">
    export let text: string;
    export let depth: number;

    const id = text.toLowerCase().replaceAll(' ', '-');
</script>

{#if depth === 1}
    <h1 class="text-red-500 text-3xl font-bold font-mono" {id}>
        <a href="#{id}" class="!text-slate-500 !no-underline font-bold ">#</a>
        {text}
    </h1>
{:else if depth === 2}
    <h2 class="text-2xl font-mono" {id}>
        <a href="#{id}" class="!text-slate-500 !no-underline font-bold">##</a>
        {text}
    </h2>
{:else}
    <h3 class="text-xl font-mono" {id}>
        <a href="#{id}" class="!text-slate-500 !no-underline font-bold">###</a>
        {text}
    </h3>
{/if}
