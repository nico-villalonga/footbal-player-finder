import reducer from '../reducer';
import { ADD } from '../actionTypes';

describe('filters reducer', () => {
    const initialState = {
        name: '',
        position: '',
        age: '',
    }

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle ADD', () => {
        const name = 'fake name';
        const position = 'favorite position';

        const filters = { name, position, age: '' };
        const action = {
            type: ADD,
            payload: { filters },
        };

        expect(reducer(initialState, action)).toEqual(filters);

        const moreFilters = { name, position, age: '20' };
        const otherAction = {
            type: ADD,
            payload: { filters: moreFilters },
        };

        expect(reducer(filters, otherAction)).toEqual(moreFilters);
    });
});
