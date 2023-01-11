<script lang="ts">
    export let text: string;
    export let depth: number;

    const genHashtag = (depth: number) => {
        return Array(depth + 1).join('#');
    };
</script>

{#if depth === 1}
    <h1 class="text-red-500 text-3xl font-mono">
        <span class="text-slate-300"># </span>{text}
    </h1>
{:else}
    <svelte:element this={`h${depth}`} class="font-mono">
        <span class="text-slate-300">{genHashtag(depth)}</span>
        {text}
    </svelte:element>
{/if}
