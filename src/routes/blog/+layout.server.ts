import { posts } from './posts';

type Summary = {
    slug: string;
    title: string;
    preview?: string;
};

export function load(): { summaries: Summary[] } {
    return {
        summaries: posts.map((post) => ({
            slug: post.slug,
            title: post.title
        }))
    };
}
