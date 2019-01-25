import React from 'react';
import { shallow } from 'enzyme';
import players from '../../../config/mockData';
import PlayersList from '../PlayersList';

require('../../../../setup');


describe('test PlayersList component', () => {
    it('should render each playerRow in players array', () => {
        const wrapper = shallow(<PlayersList players={ players } />);
        const mockPlayer = players[0];
        const renderedPlayer = wrapper.childAt(0).props().player;

        expect(wrapper.html()).not.toBe(null);
        expect(wrapper.children()).toHaveLength(3);
        expect(Object.keys(renderedPlayer)).toEqual(Object.keys(mockPlayer));
    });
});
