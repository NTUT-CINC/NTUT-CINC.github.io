import fs from 'fs';

import { parse } from "./parse";


type Summary = {
    slug: string,
    title: string,
    preview?: string,
}

export function load(): { summaries: Summary[] } {
    const path = 'src/posts';

    const posts = fs.readdirSync(path).map((filename) => {
        return parse(`${path}/${filename}`);
    });

    return {
        summaries: posts.map(post => ({
            slug: post.slug,
            title: post.title,
        }))
    };
}
