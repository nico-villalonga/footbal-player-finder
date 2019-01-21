import * as t from './actionTypes';

const initialState = {
    name: '',
    position: '',
    age: '',
}

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case t.ADD:
            return {
                ...state,
                ...payload.filters,
            };

    default:
        return state;
    }
};
