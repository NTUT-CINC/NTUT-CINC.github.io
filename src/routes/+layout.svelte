<script lang="ts">
    import '../app.css';

    import Navbar from '$lib/Navbar.svelte';
    import Footer from '$lib/Footer.svelte';
</script>

<div class="flex h-full flex-col">
    <Navbar />

    <div class="mx-auto w-full flex-grow">
        <slot />
    </div>

    <Footer />
</div>
