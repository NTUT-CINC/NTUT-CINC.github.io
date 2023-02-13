<script lang="ts">
    import { page } from '$app/stores';

    import ClubLogo from '$lib/assets/club_logo.png';

    const sameRoute = (curr: string, cmp: string) => {
        if (curr === cmp) return true;

        if (cmp === '/') return false; // special case for home page

        return curr.includes(cmp);
    };

    const routes = [
        { path: '/', name: 'Home' },
        { path: '/about', name: 'About' },
        { path: '/blog', name: 'Blog' }
    ];
</script>

<header class="mb-6 w-full p-0 backdrop-blur">
    <div class="container m-auto flex justify-between">
        <div class="h-20">
            <a href="/" class="flex h-full items-center">
                <img src={ClubLogo} alt="ntut-cinc-logo" class="mr-4 h-8" />
                <span class="font-heading text-3xl font-bold text-white">NTUT CINC</span>
            </a>
        </div>

        <div>
            <ul class="flex items-center space-x-2">
                {#each routes as { path, name }}
                    <li class="group relative w-24 text-center">
                        {#if $page.route.id && sameRoute($page.route.id, path)}
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
                            {name}
                        </a>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</header>
