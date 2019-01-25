import { expectSaga } from 'redux-saga-test-plan';
import rootSaga from '../rootSaga';
import players from '../modules/players';

require('../setup');

describe('test rootSaga', () => {
    it('should call the rootSaga', () => {
        expectSaga(rootSaga)
            .fork(players.saga)
            .run();
    });
});
