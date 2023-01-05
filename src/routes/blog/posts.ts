import fs from 'fs';

const getPost = (filename: string) => {
    const slug = filename.slice(0, -3); // trim off `.md` file extension
    const content = fs.readFileSync(`src/posts/${filename}`).toString();

    return {
        slug: slug,
        content: content
    };
};

export const getPosts = () => fs.readdirSync('src/posts').map(getPost);
