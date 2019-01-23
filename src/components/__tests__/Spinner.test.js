import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../Spinner';

require('../../setup');

describe('test Spinner component', () => {
    it('should render Spinner with class spinner', () => {
        const wrapper = shallow(
            <Spinner />
        );

        expect(wrapper.html()).not.toBe(null);
        expect(wrapper.hasClass('spinner')).toEqual(true);
    });
});
