import type { LayoutServerLoad } from './$types';

import { getPosts } from '$lib/server/posts';

export const load: LayoutServerLoad = async () => {
    return {
        summaries: getPosts().map((post) => {
            return {
                slug: post.slug,
                title: post.title
            };
        })
    };
};
