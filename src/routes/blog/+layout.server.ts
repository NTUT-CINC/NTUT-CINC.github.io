import type { LayoutServerLoad } from './$types';

import { posts } from './posts';

export const load = (() => {
    return {
        summaries: posts.map((post) => ({
            slug: post.slug,
            title: post.title
        }))
    };
}) satisfies LayoutServerLoad;
