import fs from 'fs';

export const posts = fs.readdirSync('src/posts').map((filename) => {
    const slug = filename.slice(0, -3); // trim off `.md` file extension
    const content = fs.readFileSync(`src/posts/${filename}`).toString();

    return {
        slug: slug,
        content: content
    };
});
