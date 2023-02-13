import type { LayoutServerLoad } from './$types';

import { getPosts } from '$lib/server/posts';

export const load: LayoutServerLoad = async () => {
    return {
        summaries: getPosts().map((post) => {
            return {
                slug: post.slug,
                title: post.metadata.title,
                categories: post.metadata.categories,
                createdOn: post.metadata.createdOn,
                searchTerms: post.searchTerms
            };
        })
    };
};
