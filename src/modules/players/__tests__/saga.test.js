import { expectSaga } from 'redux-saga-test-plan';

import watcherSaga, { fetchPlayers } from '../saga';
import { fetch, fetchSuccess, fetchError } from '../actions';
import players from '../../config/mockData';

describe('test players saga', () => {
    it('should dispatch fetchPlayers on FETCH action', () => {
        expectSaga(watcherSaga)
            .dispatch(fetch)
            .run();
    });

    it('should get players and dispatch fetchSuccess', () => {
        const iterator = fetchPlayers();
        iterator.next();

        const action = iterator.next({data: players}).value.PUT.action;
        expect(action).toEqual(fetchSuccess(players));
        expect(iterator.next().done).toEqual(true);
    });

    it('should fail fetching players and dispatch fetchError', () => {
        const error = 'some error';
        const iterator = fetchPlayers();
        iterator.next();

        const action = iterator.throw(error).value.PUT.action;
        expect(action).toEqual(fetchError(error));
    });
});
