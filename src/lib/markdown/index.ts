import type { Renderers } from 'svelte-markdown';

import Heading__SvelteComponent_ from './Heading.svelte';
import CodeBlock__SvelteComponent_ from './CodeBlock.svelte';

export default {
    heading: Heading__SvelteComponent_,
    code: CodeBlock__SvelteComponent_
} as Partial<Renderers>;
