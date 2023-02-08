<script lang="ts">
    import FAIcon from 'svelte-fa';
    import { faInstagram, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
</script>

<footer class="my-5">
    <div class="flex flex-col items-center">
        <div class="pb-3">
            <span class="text-slate-100">NTUT-CINC 2023</span>
        </div>
        <div class="flex items-center">
            <a
                href="https://discord.gg/Sh5Rhj8ghn"
                class="mx-2 w-6 text-slate-400 hover:text-slate-100"
                aria-label="discord-server-invite-link"
            >
                <FAIcon icon={faDiscord} class="" />
            </a>
            <a
                href="https://github.com/NTUT-CINC/"
                class="mx-2 text-slate-400 hover:text-slate-100"
                aria-label="github-organization-link"
            >
                <FAIcon icon={faGithub} class="text-xl" />
            </a>
            <a
                href="https://www.instagram.com/ntut_cinc/"
                class="mx-2 text-slate-400 hover:text-slate-100"
                aria-label="instagram-account-link"
            >
                <FAIcon icon={faInstagram} class="text-xl" />
            </a>
        </div>
    </div>
</footer>
