import * as t from './actionTypes';

// filters shape: { name: string, position: string, age: string }
export const add = filters => ({
    type: t.ADD,
    payload: { filters },
});
