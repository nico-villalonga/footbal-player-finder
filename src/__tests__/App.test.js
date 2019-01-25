import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

require('../setup');

describe('test App', () => {
    it('should mount App', () => {
        const wrapper = shallow(<App />);

        expect(wrapper.children()).toHaveLength(1);
        expect(wrapper.childAt(0).props().path).toEqual('/');
    });
});
