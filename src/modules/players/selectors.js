import { pipe } from 'ramda';
import { createSelector } from 'reselect';
import { NAME } from './constants';
import { filterByName, filterByPosition, filterByAge } from './model';
import { filtersSelectors } from '../filters';

const filterPlayers = (filters, players) => {
    const { name, position, age } = filters;

    return pipe(
        filterByName(name),
        filterByPosition(position),
        filterByAge(age),
    )(players);
};

export const getAll = state => state[NAME].data;
export const getError = state => state[NAME].hasError;
export const getFetching = state => state[NAME].isFetching;

export const getFiltered = createSelector(
    filtersSelectors.getAll,
    getAll,
    (filters, all) => filterPlayers(filters, all)
);
