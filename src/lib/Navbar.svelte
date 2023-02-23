<script lang="ts">
    import { page } from '$app/stores';

    import FAIcon from 'svelte-fa';
    import { faBars } from '@fortawesome/free-solid-svg-icons';

    import ClubLogo from '$lib/assets/club_logo.png';

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

<header
    class="fixed top-0 z-40 mb-6 w-full p-0
    backdrop-blur backdrop-brightness-50"
>
    <div class="container m-auto flex justify-between transition-all">
        <a href="/" class="flex h-full items-center p-5">
            <img src={ClubLogo} alt="ntut-cinc-logo" class="h-8" />
            <span
                class="ml-4 font-heading text-3xl
                font-bold text-white max-sm:hidden"
            >
                NTUT CINC
            </span>
        </a>

        <div class="hidden max-sm:flex max-sm:items-center">
            <button class="peer relative z-40 p-5">
                <FAIcon icon={faBars} class="text-3xl" />
            </button>

            <div
                class="fixed top-0 right-0 z-50 hidden
                h-screen w-screen backdrop-brightness-50
                peer-focus:block peer-focus:backdrop-blur-sm"
            />

            <aside
                class="fixed top-0 right-0 z-50 flex h-screen w-3/5
                translate-x-full flex-col space-y-7 bg-emerald-400
                py-10 transition-all peer-focus:translate-x-0"
            >
                {#each routes as { path, title }}
                    <a
                        href={path}
                        class="relative block w-full py-5 text-center
                        font-heading text-3xl font-bold text-black
                        transition-all hover:text-white"
                    >
                        {title}
                    </a>
                {/each}
            </aside>
        </div>

        <div class="max-sm:hidden">
            <ul class="mx-5 flex items-center space-x-2">
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
