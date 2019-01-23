import React from 'react';
import { shallow } from 'enzyme';
import Title from '../Title';

require('../../setup');

describe('test Title component', () => {
    it('should render label prop as children', () => {
        const wrapper = shallow(
            <Title label="Im rendered" />
        );

        expect(wrapper.html()).not.toBe(null);
        expect(wrapper.props().children).toEqual('Im rendered');
    });
});
