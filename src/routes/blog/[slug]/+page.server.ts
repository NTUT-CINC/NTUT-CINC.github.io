import type { PageServerLoad } from './$types';

import { error } from '@sveltejs/kit';
import { getPosts } from '../posts';

export const load = (({ params }) => {
    const post = getPosts().find((post) => post.slug === params.slug);

    if (!post) throw error(404);

    return {
        content: post.content
    };
}) satisfies PageServerLoad;
