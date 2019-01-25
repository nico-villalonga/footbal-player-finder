import React from 'react';
import { shallow, render } from 'enzyme';
import { Select, optionSelected } from '../Select';

require('../../setup');

describe('test Select with props', () => {
    const positions = [ 'Attacking Midfield', 'Central Midfield', 'Centre-Back', 'Keeper' ];
    const props = {
        id: 'idd',
        name: 'selectedPlayer',
        placeHolder: 'Placeholder',
        opened: false,
        items: positions,
        onSelect: jest.fn(),
        onToggle: jest.fn(),
        autoHide: true,
        selected: null,
    };

    const wrapper = shallow(<Select { ...props } />);

    it('should shallow render select', () => {
        expect(wrapper.props().className).toEqual('container');

        expect(wrapper.childAt(0).props().id).toEqual(props.id);
        expect(wrapper.childAt(0).hasClass('select')).toBeTruthy();
        expect(wrapper.childAt(0).props()).toHaveProperty('onClick');

        expect(wrapper.childAt(1).hasClass('options-list')).toBeTruthy();
        expect(wrapper.childAt(1).children()).toHaveLength(4);
        expect(wrapper.childAt(1).childAt(0).hasClass('option')).toBeTruthy();
        expect(wrapper.childAt(1).childAt(0).text()).toEqual('Attacking Midfield');
    });

    describe('test toggle', () => {
        it('should distch onToggle on call handleToggle', () => {
            const onToggleSpy = jest.spyOn(props, 'onToggle');

            expect(onToggleSpy).toHaveBeenCalledTimes(0);
            wrapper.childAt(0).simulate('click')
            expect(onToggleSpy).toHaveBeenCalledTimes(1);
        });

        it('should not dispatch onToggle on handleOnSelect when not autohide', () => {
            // const onToggleSpy = jest.spyOn(props, 'onToggle');

            // expect(onToggleSpy).toHaveBeenCalledTimes(0);
            // wrapper.childAt(1).childAt(0).simulate('click', 'name');
            // expect(onToggleSpy).toHaveBeenCalledTimes(0);
        });

        it('should dispatch onToggle on handleOnSelect when autohide', () => {});
    });

    it('should dispatch onSelect on handleOnSelect click', () => {
        const handleSelectSpy = jest.spyOn(props, 'onSelect');

        expect(handleSelectSpy).toHaveBeenCalledTimes(0);
        wrapper.childAt(1).childAt(0).simulate('click')
        expect(handleSelectSpy).toHaveBeenCalledTimes(1);
    });

    it('should calculate optionSelected on selected prop', () => {
        expect(optionSelected(props.selected)).toEqual('');

        const otherProps = { ...props, selected: 'Attacking Midfield' };

        expect(optionSelected(otherProps.selected)).toEqual(' option-selected');
    });
});
