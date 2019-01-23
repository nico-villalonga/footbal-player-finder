import React from 'react';
import { shallow } from 'enzyme';
import SearchResult from '../SearchResult';

require('../../setup');

describe('test SearchResult component', () => {
    it('should render label prop as children ', () => {
        const wrapper = shallow(
            <SearchResult label="Some text"/>
        );

        expect(wrapper.html()).not.toBe(null);
        expect(wrapper.children().props().children).toEqual('Some text');
    });
});
