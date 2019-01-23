import players from '../../config/mockData';
import {
    filtersFn,
    filterByProp,
    filterPlayers,
} from '../model';

describe('test players utilities model', () => {
    describe('test filtersFn predicates', () => {
        it('should return true filtersFn name predicate', () => {
            expect(filtersFn['name']('romelu')(players[0])).toEqual(true);
        });

        it('should return false filtersFn name predicate', () => {
            expect(filtersFn['name']('sergio')(players[0])).toEqual(false);
        });

        it('should return true filtersFn position predicate', () => {
            expect(filtersFn['position']('Centre-Forward')(players[0])).toEqual(true);
        });

        it('should return false filtersFn position predicate', () => {
            expect(filtersFn['position']('Keeper')(players[0])).toEqual(false);
        });

        it('should return true filtersFn age predicate', () => {
            expect(filtersFn['age'](25)(players[0])).toEqual(true);
        });

        it('should return false filtersFn age predicate', () => {
            expect(filtersFn['age'](20)(players[0])).toEqual(false);
        });
    });

    describe('test filterByProp', () => {
        it('should not filter data if filter value is empty', () => {
            const filterName = filterByProp({ name: '' });
            expect(filterName(players)).toEqual(players);
            expect(filterName(players)).toHaveLength(3);

            const filterPosition = filterByProp({ position: '' });
            expect(filterPosition(players)).toEqual(players);
            expect(filterPosition(players)).toHaveLength(3);

            const filterAge = filterByProp({ age: '' });
            expect(filterAge(players)).toEqual(players);
            expect(filterAge(players)).toHaveLength(3);
        });

        it('should filter players by name', () => {
            const filterPlayers = filterByProp({ name: 'rom' });
            const result = [ players[0], players[2] ];

            expect(filterPlayers(players)).toEqual(result);
            expect(filterPlayers(players)).toHaveLength(2);
        });

        it('should filter players by position', () => {
            const filterPlayers = filterByProp({ position: 'Keeper' });
            const result = [ players[1], players[2] ];

            expect(filterPlayers(players)).toEqual(result);
            expect(filterPlayers(players)).toHaveLength(2);
        });

        it('should filter players by age', () => {
            const filterPlayers = filterByProp({ age: '25' });
            const result = [ players[0] ];

            expect(filterPlayers(players)).toEqual(result);
            expect(filterPlayers(players)).toHaveLength(1);
        });
    });

    describe('test filterPlayers', () => {
        it('should apply all filters', () => {
            const filters = {
                name: 'rom',
                position: 'Keeper',
                age: '',
            };

            expect(filterPlayers(filters, players)).toEqual([ players[2] ]);
            expect(filterPlayers(filters, players)).toHaveLength(1);
        });
    });
});
