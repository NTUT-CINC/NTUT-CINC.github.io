<script lang="ts">
	import type { PageData } from './$types';
	import SvelteMarkdown from 'svelte-markdown';

	export let data: PageData;
</script>

<h1>blog</h1>

<ul>
	{#each data.summaries as { slug, title }}
		<li>
			<a href="/blog/{slug}">{title}</a>
		</li>
	{/each}
</ul>
