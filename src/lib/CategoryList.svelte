<script lang="ts">
    export let categories: string[];
</script>

<div class="flex">
    {#each categories as category}
        <span class="mr-2 rounded-full bg-slate-600 px-2">{category}</span>
    {/each}
</div>
