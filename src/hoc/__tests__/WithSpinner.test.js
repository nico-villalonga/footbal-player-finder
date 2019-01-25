import React from 'react';
import { shallow, render, mount } from 'enzyme';
import WithSpinner, { isEmpty } from '../WithSpinner';

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

    describe('test isEmpty functionality', () => {
        it('should pass empty value and return true', () => {
            expect(isEmpty(null)).toBeTruthy();
            expect(isEmpty(undefined)).toBeTruthy();
            expect(isEmpty([])).toBeTruthy();
            expect(isEmpty({})).toBeTruthy();
        });

        it('should pass some value and return false', () => {
            const someValue = 1;

            expect(isEmpty(someValue)).toBeFalsy();
            expect(isEmpty([someValue])).toBeFalsy();
            expect(isEmpty({someValue})).toBeFalsy();
        });
    });
});
