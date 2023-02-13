<script lang="ts">
    export let categories: string[];
</script>

<div class="flex">
    {#each categories as category}
        <span class="mr-2 rounded-full bg-neutral-700 px-2 font-mono text-sm">{category}</span>
    {/each}
</div>
