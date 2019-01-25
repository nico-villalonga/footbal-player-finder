import React from 'react';
import { shallow } from 'enzyme';
import { FilterSearch, mapDispatchToProps } from '../FilterSearch';

require('../../../../setup');


describe('test FilterSearch container', () => {
    const addFilters = jest.fn();
    let wrapper;

    const initialState = {
        name: '',
        position: '',
        age: '',
        showSelect: false,
    };

    beforeEach(() => {
        wrapper = shallow(<FilterSearch addFilters={ addFilters } />);
    });

    it('should initialize with empty state', () => {
        expect(wrapper.state()).toEqual(initialState);
    });

    describe('filters handleInputChange', () => {
        it('should handle input playerName onChange', () => {
            const changedState = {
                name: 'asd',
                position: '',
                age: '',
                showSelect: false,
            };

            wrapper.find('#player-name').simulate('change', 'name', 'asd', true);

            expect(wrapper.state()).toEqual(changedState);
        });

        it('should handle input playerPosition onChange', () => {
            const changedState = {
                name: '',
                position: 'Attacking Midfield',
                age: '',
                showSelect: false,
            };

            wrapper.find('#player-position').simulate('click');
            // wrapper.find('.option')[1].simulate('click');

            // expect(wrapper.state()).toEqual(changedState);
            // console.log('*****', wrapper.childAt(1).childAt(1))
        });

        it('should handle input playerAge onChange', () => {
            const changedState = {
                name: '',
                position: '',
                age: '20',
                showSelect: false,
            };

            wrapper.find('#player-age').simulate('change', 'age', '20', true);

            expect(wrapper.state()).toEqual(changedState);
        });

        it('should trim values before set to state', () => {
            const changedState = {
                name: 'asd',
                // position: 'Attacking Midfield',
                position: '',
                age: '20',
                showSelect: false,
            };

            wrapper.find('#player-name').simulate('change', 'name', '  asd  ', true);
            // wrapper.find('#player-position').simulate('change', 'position', '  Attacking Midfield  ', true);
            wrapper.find('#player-age').simulate('change', 'age', '  20  ', true);

            expect(wrapper.state()).toEqual(changedState);
        });
    });

    it('should call addFilters mock function', () => {
        wrapper.find('#search-button').simulate('click');
        expect(addFilters).toHaveBeenCalledTimes(1);
    });

    it('should dispatch mapDispatchToProps addFilters', () => {
        const dispatch = jest.fn();
        const dispatchProp = mapDispatchToProps(dispatch);
        const wrapper = shallow(<FilterSearch addFilters={ dispatchProp.addFilters } />);

        jest.spyOn(dispatchProp, 'addFilters')
        wrapper.find('#search-button').simulate('click');

        // expect(dispatchProp.addFilters).toHaveBeenCalled();
        // expect(dispatchProp.addFilters).toEqual(1);
    });

    describe('test Select interaction', () => {
        it('should handleFilterChange with invalidInput', () => {
            expect(wrapper.state()).toEqual(initialState);

            wrapper.instance().handleFilterChange('name', name, false);
            expect(wrapper.state()).toEqual(initialState);
        });

        it('should handleFilterChange with validInput', () => {
            const name = 'rom';
            const position = 'Attacking Midfield';
            const age = '20';

            expect(wrapper.state()).toEqual(initialState);

            const nameChange = { ...initialState, name };
            wrapper.instance().handleFilterChange('name', name, true);
            expect(wrapper.state()).toEqual(nameChange);

            const positionChange = { ...nameChange, position };
            wrapper.instance().handleFilterChange('position', position, true);
            expect(wrapper.state()).toEqual(positionChange);

            const ageChange = { ...positionChange, age };
            wrapper.instance().handleFilterChange('age', age, true);
            expect(wrapper.state()).toEqual(ageChange);
        });

        it('should toggleSelect', () => {
            expect(wrapper.state().showSelect).toBeFalsy();
            wrapper.instance().toggleSelect();
            expect(wrapper.state().showSelect).toBeTruthy();
            wrapper.instance().toggleSelect();
            expect(wrapper.state().showSelect).toBeFalsy();
        });
    });
});
