import fs from 'fs';

export const posts = fs.readdirSync('src/posts').map((filename) => {
    const content = fs.readFileSync(`src/posts/${filename}`).toString();

    const title = content.slice(2, content.indexOf('\n'));

    return {
        slug: filename.slice(0, -3), // trim off `.md` file extension
        title: title,
        content: content
    };
});
