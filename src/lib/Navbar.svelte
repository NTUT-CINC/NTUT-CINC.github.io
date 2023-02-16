<script lang="ts">
    import { page } from '$app/stores';

    import FAIcon from 'svelte-fa';
    import { faBars } from '@fortawesome/free-solid-svg-icons';

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

<header class="fixed top-0 z-40 mb-6 w-screen p-0 backdrop-blur backdrop-brightness-50">
    <div class="container m-auto flex justify-between transition-all">
        <a href="/" class="flex h-full items-center p-5">
            <img src={ClubLogo} alt="ntut-cinc-logo" class="mr-4 h-8" />
            <span class="font-heading text-3xl font-bold text-white max-sm:hidden">
                NTUT CINC
            </span>
        </a>

        <div class="hidden max-sm:flex max-sm:items-center">
            <button class="peer relative z-40 p-5">
                <FAIcon icon={faBars} class="text-2xl" />
            </button>

            <aside
                class="fixed top-0 right-0 z-50 h-screen w-3/5 translate-x-full bg-emerald-400 transition-all peer-focus:translate-x-0"
            >
                <div class="my-10 flex flex-col items-center space-y-10">
                    {#each routes as { path, name }}
                        <a
                            href={path}
                            class="relative block pb-3 pt-5 font-heading text-3xl font-bold
                            text-black transition-all hover:text-white"
                        >
                            {name}
                        </a>
                    {/each}
                </div>
            </aside>
        </div>

        <div class="max-sm:hidden">
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
