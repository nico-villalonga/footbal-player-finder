import React from 'react';
import { shallow } from 'enzyme';
import Input, { isValidInput, patterns } from '../Input';

require('../../setup');

describe('test Input with props', () => {

    describe('test patterns object', () => {
        it('should be an object of three regex', () => {
            expect(patterns['alphanumeric'] instanceof RegExp).toEqual(true);
            expect(patterns['numeric'] instanceof RegExp).toEqual(true);
            expect(patterns['text'] instanceof RegExp).toEqual(true);
            expect(Object.keys(patterns)).toHaveLength(3);
        });
    });

    describe('test isValidInput with different patterns', () => {
        it('should validate input on alphanumeric', () => {
            expect(isValidInput('alphanumeric', 'only text')).toEqual(true);
            expect(isValidInput('alphanumeric', '123456')).toEqual(true);
            expect(isValidInput('alphanumeric', 'text and 123456')).toEqual(true);
        });

        it('should validate input on numeric', () => {
            expect(isValidInput('numeric', 'only text')).toEqual(false);
            expect(isValidInput('numeric', '123456')).toEqual(true);
            expect(isValidInput('numeric', 'text and 123456')).toEqual(false);
        });

        it('should validate input on text', () => {
            expect(isValidInput('text', 'only text')).toEqual(true);
            expect(isValidInput('text', '123456')).toEqual(false);
            expect(isValidInput('text', 'text and 123456')).toEqual(false);
        });
    });

    it('should render label prop as children ', () => {
        const props = {
            id: 'idd',
            name: 'playerName',
            placeHolder: 'Placeholder',
            pattern: 'alphanumeric',
            onChange: jest.fn(),
        };

        const wrapper = shallow(
            <Input
                id={ props.id }
                name={ props.name }
                placeHolder={ props.placeHolder }
                pattern={ props.pattern }
                onChange={ props.onChange }
            />
        );

        expect(wrapper.html()).not.toBe(null);
        expect(wrapper.props().className).toEqual('group');
        expect(wrapper.childAt(0).props().name).toEqual(props.name);
        expect(wrapper.childAt(0).props().id).toEqual(props.id);
        expect(wrapper.childAt(0).props().required).toEqual(true);

        expect(wrapper.childAt(1).props().className).toEqual('bar');
        expect(wrapper.childAt(1).props().color).toEqual('#6dafd9');

        expect(wrapper.childAt(2).props().children).toEqual(props.placeHolder);

        // TODO: spy on change method
        // wrapper.simulate('change')
        // expect(wrapper.childAt(0).props().onChange).toHaveBeenCalled();
    });
});
