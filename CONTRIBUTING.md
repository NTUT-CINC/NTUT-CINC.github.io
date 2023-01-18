# Contributing

This project uses SvelteKit for static site generation and Tailwind CSS as the CSS framework

## Setting up Project

After cloning the project do the following:

-   `npm install` to install dependencies
-   `npm run dev` to start a hot reload development server

## Basic Guidelines

Those guidelines exists not as a technical limitation but as an effort to improve consistency and readability

### Markdown

-   Only one `h1` line
-   Only up to three levels of headers
-   Avoid nested lists
-   ASCII-lowercase-letter filenames

### Svelte/TypeScript

-   `camelCase` for variables and functions
-   `PascalCase` for components, types, and classes
-   Use type annotations whenever the compiler can't figure out the type
-   Choose meaningful variable names

## Checking Tools

Please run those tools before submitting a pull request or else they won't pass the CI check

-   `npm run check` to run static analysis(`svelte-check`)
-   `npm run lint` to run formatter(`prettier`) and linter(`eslint`)

> If the formatting check fails use `npm run format` to fix formatting automatically

## Resources

### Svelte/SvelteKit

-   https://svelte.dev/
-   https://kit.svelte.dev/

### TypeScript

-   https://www.typescriptlang.org/
-   https://typescript-eslint.io/rules/naming-convention/#options

### Tailwind CSS

-   https://tailwindcss.com/

## Recommended VS Code Extensions

-   [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)
-   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
-   [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
-   [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
