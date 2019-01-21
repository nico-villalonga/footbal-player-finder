import { takeEvery, put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga'
// import axios from 'axios';
import data from './data';
import { FETCH } from './actionTypes';
import { fetchSuccess, fetchError } from './actions';

function* fetchPlayers() {
    yield call(delay, 1000);

    try {
        const res = data;
        // throw new Error;
        yield put(fetchSuccess(res.data));
    } catch(error) {
        console.log('Error fetching players: ', error);
        yield put(fetchError(error));
    }
}

export default function* watchFetchPlayers() {
	yield takeEvery(FETCH, fetchPlayers);
}
