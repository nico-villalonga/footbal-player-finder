import * as t from './actionTypes';

export const add = filters => ({
    type: t.ADD,
    payload: { filters },
});
