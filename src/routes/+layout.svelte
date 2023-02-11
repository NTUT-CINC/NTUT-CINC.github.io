<script lang="ts">
    import '../app.css';

    import Navbar from '$lib/Navbar.svelte';
    import Footer from '$lib/Footer.svelte';
</script>

<div class="flex h-full flex-col">
    <Navbar />

    <div class="relative mx-auto w-full flex-grow px-5">
        <slot />
    </div>

    <Footer />
</div>
