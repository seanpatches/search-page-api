export function writeSearchToQuery(existingQuery, searchTerm) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('name', searchTerm);
    searchParams.set('page', 1);

    return searchParams.toString();
}
