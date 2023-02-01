<script lang="ts">
    import '../app.css';

    import Navbar from '$lib/Navbar.svelte';
    import Footer from '$lib/Footer.svelte';
</script>

<div class="container mx-auto mt-10 h-full">
    <Navbar />

    <slot />

    <Footer />
</div>
