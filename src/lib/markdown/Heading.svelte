<script lang="ts">
    export let text: string;
    export let depth: number;

    const id = text.toLowerCase().replaceAll(' ', '-');
</script>

{#if depth === 1}
    <h1 class="" {id}>
        <a href="#{id}" class="font-bold !text-slate-500 !no-underline ">#</a>
        {text}
    </h1>
{:else if depth === 2}
    <h2 {id}>
        <a href="#{id}" class="font-bold !text-slate-500 !no-underline">##</a>
        {text}
    </h2>
{:else}
    <h3 {id}>
        <a href="#{id}" class="font-bold !text-slate-500 !no-underline">###</a>
        {text}
    </h3>
{/if}
