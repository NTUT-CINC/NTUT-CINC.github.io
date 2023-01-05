import type { PageServerLoad } from './$types';

import { error } from '@sveltejs/kit';
import { marked } from 'marked';
import hljs from 'highlight.js/lib/common';
import { getPosts } from '../posts';

export const load = (({ params }) => {
    const post = getPosts().find((post) => post.slug === params.slug);

    if (!post) throw error(404);

    marked.setOptions({
        highlight: (code, lang) => {
            return hljs.highlight(code, { language: lang }).value;
        }
    });

    const html = marked.parse(post.content);

    return {
        content: post.content,
        html: html
    };
}) satisfies PageServerLoad;
