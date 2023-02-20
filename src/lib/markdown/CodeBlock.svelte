<script lang="ts">
    /**
     * `highlight.js/lib/common` includes common languages like
     * Python, JS, C/C++, Golang...etc.
     *
     * For additional language support, see
     * https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md
     */
    import hljs from 'highlight.js/lib/common';
    import 'highlight.js/styles/obsidian.css';
    import x86asm from 'highlight.js/lib/languages/x86asm';

    import FAIcon from 'svelte-fa';
    import { faClone, faCircleCheck, faCircleXmark } from '@fortawesome/free-regular-svg-icons';

    export let text: string;
    export let lang: string;

    hljs.registerLanguage('x86asm', x86asm);

    const highlight = (code: string, lang: string) => {
        const showLineNumber = lang.slice(-1) === '=';
        const lineCount = code.split('\n').length;

        if (showLineNumber) {
            lang = lang.slice(0, -1);
        }

        const parsedLang = hljs.getLanguage(lang)?.name || '';

        if (parsedLang) {
            const hlCode = hljs.highlight(code, { language: lang });

            return {
                code: `<pre><code>${hlCode.value}</code></pre>`,
                parsedLang,
                showLineNumber,
                lineCount
            };
        }

        return {
            code: `<pre><code>${code}</code></pre>`,
            parsedLang,
            showLineNumber,
            lineCount
        };
    };

    const res = highlight(text, lang);

    enum CopyStatus {
        default,
        success,
        fail
    }

    let copyStatus = CopyStatus.default;

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

            copyStatus = CopyStatus.success;

            setTimeout(() => (copyStatus = CopyStatus.default), 1000);
        } catch (err) {
            copyStatus = CopyStatus.fail;

            console.error(err);
        }
    };

    const handleLeaveButton = async () => {
        copyStatus = CopyStatus.default;
    };
</script>

<div class="not-prose inset-0 mb-3 overflow-hidden rounded-lg">
    {#if res.parsedLang.length > 0}
        <div
            class="flex select-none justify-end
            bg-neutral-700 text-right text-neutral-300"
        >
            <span class="mx-2 my-0.5 font-mono text-xs">{res.parsedLang}</span>
        </div>
    {/if}

    <div class="group relative bg-neutral-800 px-3 text-sm">
        <div class="absolute top-0 right-0 hidden items-center group-hover:flex">
            {#if copyStatus === CopyStatus.default}
                <button
                    on:click={handleCopy}
                    on:keyup={handleCopy}
                    class="m-3 p-0 text-neutral-600 hover:text-neutral-200"
                >
                    <FAIcon icon={faClone} class="text-xl" />
                </button>
            {:else if copyStatus === CopyStatus.success}
                <div
                    class="h-min rounded-md border
                    border-neutral-700 bg-neutral-900 px-2 py-1"
                >
                    <span>Copied to clipboard!</span>
                </div>

                <button
                    on:mouseout={handleLeaveButton}
                    on:blur={handleLeaveButton}
                    class="m-3 p-0 text-emerald-400"
                >
                    <FAIcon icon={faCircleCheck} class="text-xl" />
                </button>
            {:else}
                <div
                    class="h-min rounded-md border-2
                    border-neutral-700 bg-neutral-900 px-2 py-1"
                >
                    <span>Oops! Something went wrong...</span>
                </div>

                <button
                    on:mouseout={handleLeaveButton}
                    on:blur={handleLeaveButton}
                    class="m-3 p-0 text-red-500"
                >
                    <FAIcon icon={faCircleXmark} class="text-xl" />
                </button>
            {/if}
        </div>

        <div class="flex">
            {#if res.showLineNumber}
                <div class="mr-4 select-none py-3 text-right font-mono text-neutral-500">
                    <pre class="w-6">{Array.from(Array(res.lineCount).keys())
                            .map((n) => n + 1)
                            .join('\n')}</pre>
                </div>
            {/if}

            <div class="overflow-auto py-3">
                {@html res.code}
            </div>
        </div>
    </div>
</div>
