import type { LayoutServerLoad } from './$types';

import { getPosts } from './posts';

export const load = (() => {
    return {
        summaries: getPosts().map((post) => {
            return {
                slug: post.slug,
                title: post.title
            };
        })
    };
}) satisfies LayoutServerLoad;
