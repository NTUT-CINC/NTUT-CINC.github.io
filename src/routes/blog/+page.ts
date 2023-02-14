import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
    const searchTerm = url.searchParams.get('searchTerm') || '';

    return { searchTerm };
};
