<script lang="ts">
    import '../app.css';
    import FAIcon from 'svelte-fa';
    import { faInstagram, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
</script>

<div class="container mt-10 mx-auto h-full">
    <nav class="mb-6 p-0 sticky top-5">
        <div class="container flex m-auto justify-between">
            <div class="container">
                <a href="/">[insert logo]</a>
            </div>
            <ul class="flex flex-row p-1 bg-white rounded-full shadow-md">
                <li>
                    <a
                        href="/"
                        class="block py-2 px-3 font-bold text-xl rounded-full bg-gradient-to-br from-yellow-600 to-red-600"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a href="/about" class="block mx-1 py-2 px-3 font-bold text-xl text-orange-500">
                        About
                    </a>
                </li>
                <li>
                    <a href="/blog" class="block mx-1 py-2 px-3 font-bold text-xl text-orange-500">
                        Blog
                    </a>
                </li>
            </ul>
        </div>
    </nav>

    <slot />

    <footer class="my-5">
        <div class="flex flex-col items-center">
            <div class="pb-3">
                <span class="text-slate-100">NTUT-CINC 2023</span>
            </div>
            <div class="flex items-center">
                <a
                    href="https://discord.gg/Sh5Rhj8ghn"
                    class="w-6 mx-2 text-slate-400 hover:text-slate-100"
                >
                    <FAIcon icon={faDiscord} class="" />
                </a>
                <a
                    href="https://github.com/NTUT-CINC/"
                    class="mx-2 text-slate-400 hover:text-slate-100"
                >
                    <FAIcon icon={faGithub} class="text-xl" />
                </a>
                <a
                    href="https://www.instagram.com/ntut_cinc/"
                    class="mx-2 text-slate-400 hover:text-slate-100"
                >
                    <FAIcon icon={faInstagram} class="text-xl" />
                </a>
            </div>
        </div>
    </footer>
</div>
