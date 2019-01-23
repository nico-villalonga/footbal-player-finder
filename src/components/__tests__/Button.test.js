import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

require('../../setup');

describe('test Button component', () => {
    it('should render Button with props', () => {
        const props = {
            variant: 'outline',
            label: 'Button text',
            onClick: jest.fn(),
        }
        const wrapper = shallow(
            <Button
                variant={ props.variant }
                label={ props.label }
                onClick={ props.onClick }
            />
        );

        expect(wrapper.html()).not.toBe(null);
        expect(wrapper.props().classes).toEqual(props.variant);
        expect(wrapper.props().children).toEqual(props.label);

        wrapper.simulate('click');
        expect(wrapper.props().onClick).toHaveBeenCalled();
    });
});
