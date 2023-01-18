<script lang="ts">
    import { marked } from 'marked';
    import hljs from 'highlight.js/lib/common'; // this should cover most languages

    import 'highlight.js/styles/github-dark.css';

    export let lang: string;
    export let raw: string;

    marked.setOptions({
        highlight: (code, lang) => {
            return hljs.highlight(code, { language: lang }).value;
        }
    });

    const html = marked.parse(raw);
</script>

<div class="not-prose mb-3">
    <div class="px-2 pt-1 rounded-t-lg bg-slate-700 text-right">
        <p class="font-mono text-xs">{lang}</p>
    </div>

    <div class="p-3 text-sm rounded-b-lg bg-slate-800">
        {@html html}
    </div>
</div>
