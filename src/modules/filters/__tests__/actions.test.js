import store from '../../config/mockStore';
import { ADD } from '../actionTypes';
import { add } from '../actions';

describe('test filters action creator', () => {
    beforeEach(() => {
        store.clearActions();
    });

    it('should dispatch add', () => {
        const filters = {
            name: 'fake name',
            position: 'some position',
            age: '20',
        };

        const action = {
            type: ADD,
            payload: { filters },
        };

        store.dispatch(add(filters));
        expect(store.getActions()).toEqual([ action ]);
    });
});
