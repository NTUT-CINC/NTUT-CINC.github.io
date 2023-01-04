<script lang="ts">
	import type { PageData } from './$types';
	import SvelteMarkdown from 'svelte-markdown';
	import fs from 'fs';

	const path = 'src/posts';

	let posts = fs.readdirSync(path).map((filename) => {
		return fs.readFileSync(`${path}/${filename}`).toString();
	});

	export let data: PageData;
</script>

<h1>blog</h1>

<ul>
	{#each data.summaries as { slug, title }}
		<li><a href="/blog/{slug}">{title}</a></li>
	{/each}
</ul>

<div class="posts">
	{#each posts as post}
		<SvelteMarkdown source={post} />
	{/each}
</div>

<style>
	@media (prefers-color-scheme: dark) {
		.posts :global(h1) {
			color: blue;
		}
	}
</style>
