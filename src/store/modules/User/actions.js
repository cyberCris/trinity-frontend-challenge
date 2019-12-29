export function searchRequest(login) {
    return {
        type: '@githubsearch/SEARCH_REQUEST',
        payload: { login },
    };
}

export function searchSuccess(user, repos) {
    return {
        type: '@githubsearch/SEARCH_SUCCESS',
        payload: { user, repos },
    };
}
