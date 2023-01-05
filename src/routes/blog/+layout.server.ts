import type { LayoutServerLoad } from './$types';

import { getPosts } from './posts';

export const load = (() => {
    return {
        summaries: getPosts().map((post) => {
            const title = post.content.slice(2, post.content.indexOf('\n'));

            return {
                slug: post.slug,
                title: title
            };
        })
    };
}) satisfies LayoutServerLoad;
