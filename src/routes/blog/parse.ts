import fs from 'fs';

import { marked } from 'marked';

export type Post = {
    slug: string,
    title: string,
    content: string
}

export function parse(filepath: string): Post {
    const content = fs.readFileSync(filepath).toString();

    const firstLine = content.slice(2, content.indexOf("\n"));

    console.log(firstLine);

    const tokens = marked.lexer(content);

    // get first `#` line content
    // const title = tokens.filter(token =>
    //         token.type === 'heading' && token.depth === 3)[0].raw;

    return {
        slug: filepath.slice(0, -3), // trim off `.md` file extension
        title: firstLine,
        content: content
    }
}
