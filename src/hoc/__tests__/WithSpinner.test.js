import React from 'react';
import { shallow, render, mount } from 'enzyme';
import WithSpinner from '../WithSpinner';

require('../../setup');

describe('test WithSpinner hoc', () => {
    const FakeComponent = () => (
        <div>Has Loaded</div>
    );

    const FakeComponentWithSpinner = WithSpinner('data')(FakeComponent);

    it('should render error component', () => {
        const wrapper = shallow(
            <FakeComponentWithSpinner
                hasError={ true }
                isFetching={ false }
                data={ [] }
            />
        );

        expect(wrapper.html()).not.toBe(null);
        expect(wrapper.props().label).toEqual('An error has occured!');
    });

    it('should render loading component', () => {
        const wrapper = render(
            <FakeComponentWithSpinner
                hasError={ false }
                isFetching={ true }
                data={ [] }
            />
        );

        expect(wrapper.html()).not.toBe(null);
        expect(wrapper.hasClass('spinner')).toEqual(true);
    });

    it('should render no results found component', () => {
        const wrapper = shallow(
            <FakeComponentWithSpinner
                hasError={ false }
                isFetching={ false }
                data={ [] }
            />
        );

        expect(wrapper.html()).not.toBe(null);
        expect(wrapper.props().label).toEqual('No results found!');
    });

    it('should render the wrapped component (FakeComponent)', () => {
        const wrapper = mount(
            <FakeComponentWithSpinner
                hasError={ false }
                isFetching={ false }
                data={ [1, 2, 3] }
            />
        );

        expect(wrapper.html()).not.toBe(null);
        expect(wrapper.children().html()).toEqual('<div>Has Loaded</div>');
    });
});
