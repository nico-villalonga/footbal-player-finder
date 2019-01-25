import React from 'react';
import { shallow } from 'enzyme';
import PlayerListHeader from '../PlayerListHeader';

require('../../../../setup');


describe('test PlayerListHeader component', () => {
    it('should render the four header columns', () => {
        const headerTitles = ['Player', 'Position', 'Nationality', 'Age'];
        const wrapper = shallow(<PlayerListHeader />);

        expect(wrapper.children().html()).not.toBe(null);
        expect(wrapper.children().children()).toHaveLength(4);
        expect(wrapper.children().hasClass('header')).toBeTruthy();
        expect(wrapper.children().childAt(0).text()).toEqual(headerTitles[0]);
        expect(wrapper.children().childAt(1).text()).toEqual(headerTitles[1]);
        expect(wrapper.children().childAt(2).text()).toEqual(headerTitles[2]);
        expect(wrapper.children().childAt(3).text()).toEqual(headerTitles[3]);
    });
});
