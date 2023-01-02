import { error } from "@sveltejs/kit";
import type { Post } from "../data";
import { posts } from "../data";

type Input = {
    params: Post
}

export function load({ params }: Input) {
    const post = posts.find(post => post.slug === params.slug);

    if (!post)
        throw error(404);

    return { post };
}
