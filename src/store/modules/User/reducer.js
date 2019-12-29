/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
    user: {},
    repos: [],
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@githubsearch/SEARCH_SUCCESS': {
                draft.user = action.payload.user;
                draft.repos = action.payload.repos;
                break;
            }
            default:
        }
    });
}
