import { getAll } from '../selectors';

describe('test filters selectors', () => {
    it('should get filters store slice', () => {
        const filters = {
            name: 'fake name',
            position: 'some position',
            age: '20',
        };

        const store = {
            players: {
                data: [],
                isFetching: false,
                hasError: false,
            },
            filters,
        };

        expect(getAll(store)).toMatchObject(filters);
    });
});
