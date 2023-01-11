<script lang="ts">
    import { marked } from 'marked';
    import hljs from 'highlight.js';

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

<div>
    <div class="px-3 rounded-t-lg bg-slate-700 text-right">
        <span class="font-mono text-sm">{lang}</span>
    </div>

    <div class="p-3 rounded-b-lg bg-slate-800">
        {@html html}
    </div>
</div>
