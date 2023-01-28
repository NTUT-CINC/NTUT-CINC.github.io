import fs from 'fs';
import { execSync } from 'child_process';

const getTime = (filename: string): [Date, Date] => {
    /**
     * I don't think git commits preserve file metadata
     * so i used git's file history as an alternative
     */
    const createdOn = new Date(
        Number.parseInt(
            execSync(`git log --format=%ct --diff-filter=A -- src/posts/${filename}`)
                .toString()
                .trim()
        ) * 1000
    );

    const updatedOn = new Date(
        Number.parseInt(
            execSync(`git log --format=%ct -1 -- src/posts/${filename}`).toString().trim()
        ) * 1000
    );

    return [createdOn, updatedOn];
};

const getPost = (filename: string) => {
    const slug = filename.slice(0, -3); // trim off `.md` file extension
    const content = fs.readFileSync(`src/posts/${filename}`).toString();
    const title = content.slice(2, content.indexOf('\n'));
    const [createdOn, updatedOn] = getTime(filename);

    return {
        slug: slug,
        title: title,
        content: content,
        createdOn: createdOn,
        updatedOn: updatedOn
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
        .sort((a, b) => b.createdOn.getTime() - a.createdOn.getTime());
