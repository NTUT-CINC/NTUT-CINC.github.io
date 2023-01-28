<script lang="ts">
    import { marked } from 'marked';
    import hljs from 'highlight.js/lib/common'; // this should cover most languages

    import 'highlight.js/styles/github-dark.css';

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
    <div class="px-2 pt-1 rounded-t-lg bg-slate-700 text-right select-none">
        <p class="font-mono text-xs">{lang}</p>
    </div>

    <div
        on:mouseover={handleShowButton}
        on:mouseout={handleHideButton}
        on:focus={handleShowButton}
        on:blur={handleHideButton}
        class="relative p-3 text-sm rounded-b-lg bg-slate-800"
    >
        <div
            on:click={handleCopy}
            on:mouseout={handleLeaveButton}
            on:keyup={handleCopy}
            on:blur={handleLeaveButton}
            class="{showCopyButton} flex absolute top-0 right-0"
        >
            <div class="flex items-center py-1">
                {#if copyStatus === 'success'}
                    <div class="px-2 py-1 bg-slate-900 rounded-md border border-slate-700">
                        <span>Copied to clipboard!</span>
                    </div>
                {:else if copyStatus === 'fail'}
                    <div class="px-2 py-1 bg-slate-900 rounded-md border-2 border-slate-700">
                        <span>Oops! Something went wrong...</span>
                    </div>
                {/if}
            </div>
            {#if copyStatus === 'default'}
                <button class="p-2 text-slate-600 hover:text-slate-200">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6"
                        />
                    </svg>
                </button>
            {:else if copyStatus === 'success'}
                <button class="p-2 text-emerald-400">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </button>
            {:else}
                <button class="p-2 text-red-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </button>
            {/if}
        </div>

        {@html html}
    </div>
</div>
