<script lang="ts">
    import { marked } from 'marked';
    import hljs from 'highlight.js/lib/common'; // this should cover most languages
    import 'highlight.js/styles/github-dark.css';

    import FAIcon from 'svelte-fa';
    import { faClone, faCircleCheck, faCircleXmark } from '@fortawesome/free-regular-svg-icons';

    export let text: string;
    export let lang: string;
    export let raw: string;

    let showCopyButton: 'hidden' | 'block' = 'hidden';
    let copyStatus: 'default' | 'success' | 'fail' = 'default';

    const handleShowButton = async () => {
        showCopyButton = 'block';
    };

    const handleHideButton = async () => {
        showCopyButton = 'hidden';
    };

    const handleFallbackCopy = async () => {
        let textArea = document.createElement('textarea');
        textArea.value = text;

        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.position = 'fixed';

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            document.execCommand('copy');
        } catch (err) {
            return;
        }

        document.body.removeChild(textArea);
    };

    // TODO: Implement animations
    const handleCopy = async () => {
        try {
            if (navigator.clipboard) {
                // the `navigator.clipboard` API is only allowed over HTTPS connection
                await navigator.clipboard.writeText(text);
            } else {
                await handleFallbackCopy();
            }

            copyStatus = 'success';
        } catch (err) {
            copyStatus = 'fail';

            console.error(err);
        }
    };

    const handleLeaveButton = async () => {
        copyStatus = 'default';
    };

    const html = marked.parse(raw, {
        highlight: (code, lang) => hljs.highlight(code, { language: lang }).value
    });
</script>

<div class="not-prose mb-3">
    <div class="select-none rounded-t-lg bg-slate-700 px-2 pt-1 text-right">
        <p class="font-mono text-xs">{lang}</p>
    </div>

    <div
        on:mouseover={handleShowButton}
        on:mouseout={handleHideButton}
        on:focus={handleShowButton}
        on:blur={handleHideButton}
        class="relative rounded-b-lg bg-slate-800 p-3 text-sm"
    >
        <div
            on:click={handleCopy}
            on:mouseout={handleLeaveButton}
            on:keyup={handleCopy}
            on:blur={handleLeaveButton}
            class="{showCopyButton} absolute top-0 right-0 flex"
        >
            <div class="flex items-center py-1">
                {#if copyStatus === 'success'}
                    <div class="rounded-md border border-slate-700 bg-slate-900 px-2 py-1">
                        <span>Copied to clipboard!</span>
                    </div>
                {:else if copyStatus === 'fail'}
                    <div class="rounded-md border-2 border-slate-700 bg-slate-900 px-2 py-1">
                        <span>Oops! Something went wrong...</span>
                    </div>
                {/if}
            </div>
            {#if copyStatus === 'default'}
                <button class="p-3 text-slate-600 hover:text-slate-200">
                    <FAIcon icon={faClone} class="text-xl" />
                </button>
            {:else if copyStatus === 'success'}
                <button class="p-3 text-emerald-400">
                    <FAIcon icon={faCircleCheck} class="text-xl" />
                </button>
            {:else}
                <button class="p-3 text-red-500">
                    <FAIcon icon={faCircleXmark} class="text-xl" />
                </button>
            {/if}
        </div>

        {@html html}
    </div>
</div>
