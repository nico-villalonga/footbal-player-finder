import players from '../../config/mockData';
import {
    getAll,
    getError,
    getFetching,
    getFiltered,
} from '../selectors';

describe('test players selectors', () => {
    const store = {
        players: {
            data: players,
            hasError: false,
            isFetching: false,
        },
        filters: {
            name: 'rom',
            position: 'Keeper',
            age: '',
        },
    };

    it('should get players data store slice', () => {
        expect(getAll(store)).toEqual(players);
    });

    it('should get players hasError store slice', () => {
        expect(getError(store)).toEqual(false);
    });

    it('should get players isFetching store slice', () => {
        expect(getFetching(store)).toEqual(false);
    });

    it('should get players filtered combining selectors', () => {
        expect(getFiltered(store)).toEqual([ players[2] ]);
        expect(getFiltered(store)).toHaveLength(1);
    });
});
