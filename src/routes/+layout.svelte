<script lang="ts">
    import '../app.css';

    import Navbar from '$lib/Navbar.svelte';
    import Footer from '$lib/Footer.svelte';
</script>

<div class="container mt-10 mx-auto h-full">
    <Navbar />

    <slot />

    <Footer />
</div>
