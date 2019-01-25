import { takeEvery, put, call } from 'redux-saga/effects';
// import { delay } from 'redux-saga'

import api from './api';
import { FETCH } from './actionTypes';
import { fetchSuccess, fetchError } from './actions';

export function* fetchPlayers() {
    // Delaying to test loader when fetching mock data
    // yield call(delay, 1000);

    try {
        const res = yield call(api.fetchPlayers);
        yield put(fetchSuccess(res.data));
    } catch(error) {
        yield put(fetchError(error));
    }
}

export default function* watchFetchPlayers() {
    yield takeEvery(FETCH, fetchPlayers);
}
