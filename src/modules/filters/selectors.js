import { createSelector } from 'reselect';
import { NAME } from './constants';

export const getFilters = state => state[NAME];

export const getAll = createSelector(
    getFilters,
    filters => filters
);

