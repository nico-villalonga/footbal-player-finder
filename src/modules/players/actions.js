import * as t from './actionTypes';

export const fetch = () => ({
    type: t.FETCH,
});

// players shape: [{...}, {...}, ];
export const fetchSuccess = players => ({
    type: t.FETCH_SUCCESS,
    payload: { players },
});

export const fetchError = error => ({
    type: t.FETCH_ERROR,
    payload: { error },
});
