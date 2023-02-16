import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
    /**
     * Because `@sveltejs/adapter-static` can't deal with
     * `url.searchParams`, we need to parse it ourselves
     */
    // For more information please consult https://stackoverflow.com/a/10126995
    const match = url.href.match(/searchTerm=([^&]*)/);
    const searchTerm = match ? match[1].replace('+', ' ') : '';

    return { searchTerm };
};
