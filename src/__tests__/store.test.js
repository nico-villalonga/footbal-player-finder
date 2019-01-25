import store from '../store';

describe('test store', () => {
    it('should check store has basic functionality', () => {
        expect(store).toHaveProperty('dispatch');
        expect(store).toHaveProperty('subscribe');
        expect(store).toHaveProperty('getState');
    });
});
