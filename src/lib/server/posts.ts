import fs from 'fs';
import { execSync } from 'child_process';

import frontmatter from 'front-matter';

interface MarkdownFrontmatter {
    preview?: string;
    categories?: string[];
}

const getTime = (filename: string): [Date, Date] => {
    /**
     * I don't think git commits preserve file metadata
     * so i used git's file history as an alternative
     */
    const createdOn = new Date(
        Number.parseInt(
            execSync(
                `git log --format=%ct --diff-filter=A -- src/posts/${filename}`
            )
                .toString()
                .trim()
        ) * 1000
    );

    const updatedOn = new Date(
        Number.parseInt(
            execSync(`git log --format=%ct -1 -- src/posts/${filename}`)
                .toString()
                .trim()
        ) * 1000
    );

    return [createdOn, updatedOn];
};

const getPost = (filename: string) => {
    const slug = filename.slice(0, -3); // trim off `.md` file extension
    const raw = fs.readFileSync(`src/posts/${filename}`).toString();
    const content = frontmatter<MarkdownFrontmatter>(raw);

    const body = content.body;
    const title = body.slice(2, body.indexOf('\n'));
    const categories = content.attributes.categories || [];
    const [createdOn, updatedOn] = getTime(filename);

    return {
        slug: slug,
        content: body,
        metadata: {
            title: title,
            categories: categories,
            createdOn: createdOn,
            updatedOn: updatedOn
        },
        searchTerms: `${title} ${categories.join(' ')}`.toLowerCase()
    };
};

/**
 * Read markdown files in `src/posts/` and parse required data into a list of objects
 *
 * The operations in this function are fairly inefficient IMO
 * but those data would be statically generated
 * so this would probably only affect build time
 */
export const getPosts = () =>
    fs
        .readdirSync('src/posts')
        .map(getPost)
        .sort(
            (a, b) =>
                b.metadata.createdOn.getTime() - a.metadata.createdOn.getTime()
        );
