import * as t from './actionTypes';

const initialState = {
    data: [],
    hasError: false,
    isFetching: false,
}

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case t.FETCH:
            return {
                ...state,
                isFetching: true,
            }

        case t.FETCH_SUCCESS:
            return {
                ...state,
                data: [ ...payload.players ],
                hasError: false,
                isFetching: false,
            };

        case t.FETCH_ERROR:
            return {
                ...state,
                hasError: true,
                isFetching: false,
            }

    default:
        return state;
    }
};
