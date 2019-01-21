import { fork } from 'redux-saga/effects';

import players from './modules/players';

export default function* rootSaga() {
    yield [
        fork(players.saga),
    ];
}
