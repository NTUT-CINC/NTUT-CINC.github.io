<script lang="ts">
    export let text: string;
    export let depth: number;

    const id = text.toLowerCase().replaceAll(' ', '-');
</script>

{#if depth === 1}
    <h1 {id} class="font-heading">
        <a href="#{id}" class="font-sans font-bold text-slate-500 no-underline ">#</a>
        {text}
    </h1>
{:else if depth === 2}
    <h2 {id} class="font-heading">
        <a href="#{id}" class="font-sans font-bold text-slate-500 no-underline">##</a>
        {text}
    </h2>
{:else}
    <h3 {id} class="font-heading">
        <a href="#{id}" class="font-sans font-bold text-slate-500 no-underline">###</a>
        {text}
    </h3>
{/if}
