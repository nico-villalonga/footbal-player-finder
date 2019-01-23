import store from '../../config/mockStore';
import players from '../../config/mockData';
import { FETCH, FETCH_SUCCESS, FETCH_ERROR } from '../actionTypes';
import { fetch, fetchSuccess, fetchError } from '../actions';

describe('test players action creator', () => {
    beforeEach(() => {
        store.clearActions();
    });

    it('should dispatch fetch', () => {
        const action = {
            type: FETCH,
        };

        store.dispatch(fetch());
        expect(store.getActions()).toEqual([ action ]);
    });

    it('should dispatch fetchSuccess', () => {
        const action = {
            type: FETCH_SUCCESS,
            payload: { players },
        };

        store.dispatch(fetchSuccess(players));
        expect(store.getActions()).toEqual([ action ]);
        expect(store.getActions()[0].payload.players).toHaveLength(3);
    });

    it('should dispatch fetchError', () => {
        const error = new Error;

        const action = {
            type: FETCH_ERROR,
            payload: { error },
        };

        store.dispatch(fetchError(error));
        expect(store.getActions()).toEqual([ action ]);
    });
});
