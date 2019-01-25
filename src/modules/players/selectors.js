import { createSelector } from 'reselect';
import { NAME } from './constants';
import { filterPlayers } from './model';
import { filtersSelectors } from '../filters';

export const getAll = state => state[NAME].data;
export const getError = state => state[NAME].hasError;
export const getFetching = state => state[NAME].isFetching;

export const getFiltered = createSelector(
    filtersSelectors.getAll,
    getAll,
    (filters, all) => filterPlayers(filters, all)
);
