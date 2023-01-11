import fs from 'fs';

const getPost = (filename: string) => {
    const slug = filename.slice(0, -3); // trim off `.md` file extension
    const content = fs.readFileSync(`src/posts/${filename}`).toString();
    const metadata = fs.statSync(`src/posts/${filename}`);

    return {
        slug: slug,
        content: content,
        createdOn: metadata.birthtime,
        updatedOn: metadata.ctime
    };
};

export const getPosts = () =>
    fs
        .readdirSync('src/posts')
        .map(getPost)
        .sort((a, b) => b.createdOn.getTime() - a.createdOn.getTime());
