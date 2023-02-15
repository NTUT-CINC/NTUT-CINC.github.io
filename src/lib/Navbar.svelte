<script lang="ts">
    import { page } from '$app/stores';

    const sameRoute = (curr: string | null, cmp: string) => {
        if (curr === cmp) return true;

        if (cmp === '/') return false; // special case for home page

        return curr !== null && curr.includes(cmp);
    };

    const routes = [
        { path: '/', title: 'Home' },
        { path: '/about', title: 'About' },
        { path: '/blog', title: 'Blog' }
    ];
</script>

<header class="mb-6 w-full p-0 backdrop-blur">
    <div class="container m-auto flex justify-between">
        <div class="flex items-center justify-center">
            <a href="/" class="p-3">[insert logo]</a>
        </div>

        <div>
            <ul class="flex items-center space-x-2">
                {#each routes as { path, title }}
                    <li class="group relative w-24 text-center">
                        {#if sameRoute($page.route.id, path)}
                            <div class="absolute h-1 w-full bg-emerald-400" />
                        {/if}

                        <div
                            class="absolute h-full w-full -translate-y-full
                            rounded-b-md bg-emerald-400
                            transition-all group-hover:translate-y-0"
                        />

                        <a
                            href={path}
                            class="relative block pb-3 pt-5 font-heading text-2xl
                            font-bold transition-all group-hover:text-black"
                        >
                            {title}
                        </a>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</header>
