import fs from 'fs';

export type Post = {
	slug: string;
	title: string;
	content: string;
};

export const posts: Post[] = fs.readdirSync('src/posts').map((filename) => {
	const content = fs.readFileSync(`src/posts/${filename}`).toString();

	const title = content.slice(2, content.indexOf('\n'));

	return {
		slug: filename.slice(0, -3), // trim off `.md` file extension
		title: title,
		content: content
	};
});
