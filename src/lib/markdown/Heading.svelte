<script lang="ts">
    export let text: string;
    export let depth: number;

    const id = text.toLowerCase().replaceAll(' ', '-');
</script>

<svelte:element this={`h${depth}`} {id} class="group relative -ml-4 pl-4 font-heading">
    <a
        href="#{id}"
        class="absolute -ml-2 -translate-x-full
        font-sans font-bold !text-neutral-500 no-underline
        opacity-0 transition-all group-hover:opacity-100 max-sm:hidden"
    >
        #
    </a>
    <span class="underline decoration-emerald-400 decoration-4 underline-offset-[6px]">{text}</span>
</svelte:element>
