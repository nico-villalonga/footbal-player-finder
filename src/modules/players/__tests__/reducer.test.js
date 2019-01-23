import reducer from '../reducer';
import players from '../../config/mockData';
import { FETCH, FETCH_SUCCESS, FETCH_ERROR } from '../actionTypes';

describe('filters reducer', () => {
    const initialState = {
        data: [],
        hasError: false,
        isFetching: false,
    }

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle FETCH', () => {
        const action = {
            type: FETCH,
        };

        const resultState = {
            data: [],
            hasError: false,
            isFetching: true,
        }

        expect(reducer(initialState, action)).toEqual(resultState);
        expect(reducer(initialState, action).isFetching).toEqual(true);
    });

    it('should handle FETCH_SUCCESS', () => {
        const action = {
            type: FETCH_SUCCESS,
            payload: { players },
        };

        const resultState = {
            data: players,
            hasError: false,
            isFetching: false,
        }

        expect(reducer(initialState, action)).toEqual(resultState);
        expect(reducer(initialState, action).isFetching).toEqual(false);
        expect(reducer(initialState, action).data).toHaveLength(3);
    });

    it('should handle FETCH_ERROR', () => {
        const error = new Error;

        const action = {
            type: FETCH_ERROR,
            payload: { error },
        };

        const resultState = {
            data: [],
            hasError: true,
            isFetching: false,
        }

        expect(reducer(initialState, action)).toEqual(resultState);
        expect(reducer(initialState, action).hasError).toEqual(true);
    });
});
