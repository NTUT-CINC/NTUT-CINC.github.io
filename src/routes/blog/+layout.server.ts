import type { LayoutServerLoad } from './$types';

import { posts } from './posts';

export const load = (() => {
    return {
        summaries: posts.map((post) => {
            const title = post.content.slice(2, post.content.indexOf('\n'));

            return {
                slug: post.slug,
                title: title
            };
        })
    };
}) satisfies LayoutServerLoad;
