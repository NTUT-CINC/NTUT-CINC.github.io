<script lang="ts">
    import FAIcon from 'svelte-fa';
    import {
        faDiscord,
        faGithub,
        faInstagram,
        faFacebookF
    } from '@fortawesome/free-brands-svg-icons';
</script>

<footer class="relative mx-auto mt-10 w-3/4 max-sm:w-full max-sm:px-5 lg:w-3/5">
    <hr class="h-0.5 border-0 bg-slate-700" />

    <div
        class="my-20 flex flex-row items-center justify-between max-sm:flex-col max-sm:justify-center"
    >
        <!-- TODO: Replace stolen placeholder image -->
        <img
            src="https://course-map-fcf13.web.app/static/media/logo.e5f6774504b50d32233d.png"
            alt="ntut-logo"
            class="mx-2 h-24"
        />

        <div class="flex justify-evenly">
            <a
                href="https://discord.gg/Sh5Rhj8ghn"
                class="m-2 flex h-10 w-10 items-center justify-center rounded-full
                bg-slate-700 text-center text-slate-900 transition-all hover:bg-slate-300"
                aria-label="discord-server-invite-link"
            >
                <FAIcon icon={faDiscord} class="text-xl" />
            </a>

            <a
                href="https://github.com/NTUT-CINC/"
                class="m-2 flex h-10 w-10 items-center justify-center rounded-full
                bg-slate-700 text-center text-slate-900 transition-all hover:bg-slate-300"
                aria-label="github-organization-link"
            >
                <FAIcon icon={faGithub} class="text-2xl" />
            </a>

            <a
                href="https://www.instagram.com/ntut_cinc/"
                class="m-2 flex h-10 w-10 items-center justify-center rounded-full
                bg-slate-700 text-center text-slate-900 transition-all hover:bg-slate-300"
                aria-label="instagram-account-link"
            >
                <FAIcon icon={faInstagram} class="text-2xl" />
            </a>

            <a
                href="https://www.facebook.com/profile.php?id=100088319433335"
                class="m-2 flex h-10 w-10 items-center justify-center rounded-full
                bg-slate-700 text-center text-slate-900 transition-all hover:bg-slate-300"
                aria-label="facebook-account-link"
            >
                <FAIcon icon={faFacebookF} class="text-2xl" />
            </a>
        </div>
    </div>

    <div class="absolute inset-x-0 bottom-0 mb-5 text-center">
        <p class="font-bold text-slate-500">NTUT CINC © 2023</p>
    </div>
</footer>
