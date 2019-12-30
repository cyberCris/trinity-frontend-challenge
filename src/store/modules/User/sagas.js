import { takeLatest, call, put, all } from 'redux-saga/effects';

import history from '../../../services/history';
import api from '../../../services/api';
import { searchSuccess } from './actions';

export function* getUser({ payload }) {
    try {
        const { login } = payload;

        const responseUser = yield call(api.get, `/users/${login}`);
        const responseRepos = yield call(api.get, `/users/${login}/repos`);

        yield put(searchSuccess(responseUser.data, responseRepos.data));

        history.push('/users');
    } catch (err) {
        // console.log(err);
    }
}

export default all([takeLatest('@githubsearch/SEARCH_REQUEST', getUser)]);
