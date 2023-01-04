import type { Post } from '../posts';
import { error } from '@sveltejs/kit';
import { posts } from '../posts';

type Input = {
    params: Post;
};

export function load({ params }: Input) {
    const post = posts.find((post) => post.slug === params.slug);

    if (!post) throw error(404);

    return { post };
}
