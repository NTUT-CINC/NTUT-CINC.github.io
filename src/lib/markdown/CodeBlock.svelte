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

    import CopyButton from '$lib/CopyButton.svelte';

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
        <CopyButton {text} />

        <div class="flex">
            {#if res.showLineNumber}
                <div
                    class="mr-4 select-none py-3 text-right
                    font-mono text-neutral-500"
                >
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
