<script lang="ts">
    let show = true;

    const handleClick = () => {
        show = false;
    };
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<div>
    <section class="h-screen md:grid md:grid-cols-12">
        <div class="relative col-span-8 col-start-5 row-start-1">
            <div class="z-10 flex h-full items-center justify-center">
                <div class="mx-5 text-center md:-mt-32">
                    <h1 class="font-heading text-7xl font-bold md:text-9xl">NTUT CINC</h1>

                    <p
                        class="bg-gradient-to-r from-emerald-300
                        via-emerald-400 to-teal-300 bg-clip-text
                        text-2xl font-bold text-transparent md:text-3xl"
                    >
                        CINC is not <span class="bg-emerald-400 text-black">Cybercriminal</span>.
                    </p>
                </div>
            </div>
        </div>

        <div class="relative col-span-5 col-start-1 row-start-1 flex items-center">
            <div class="flex w-full items-center justify-center">
                <div class="flex w-full flex-wrap justify-center md:ml-24">
                    <div class="m-5 h-32 w-32 bg-gradient-to-br from-orange-500 to-yellow-400" />

                    <div class="m-5 h-32 w-32 bg-gradient-to-br from-pink-600 to-rose-600" />

                    <div class="m-5 h-32 w-32 bg-gradient-to-br from-emerald-400 to-cyan-400" />
                </div>
            </div>
        </div>

        {#if show}
            <div class="fixed inset-x-0 top-52 mx-auto max-w-prose">
                <button
                    on:click={handleClick}
                    class="mx-auto block bg-black p-5 text-left text-lg text-red-500"
                >
                    Note: This page is only a placeholder and NOT designed, ignore everything you
                    see here. Go to blog to see more complete features and design. If you really
                    want to view this page, click me to hide.
                </button>
            </div>
        {/if}
    </section>
</div>
