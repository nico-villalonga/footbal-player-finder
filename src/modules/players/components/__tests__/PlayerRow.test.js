import React from 'react';
import { shallow } from 'enzyme';
import PlayerRow from '../PlayerRow';
import { dateToAge } from '../../model';

require('../../../../setup');


describe('test PlayerRow component', () => {
    it('should mount the component with player info', () => {
        const player = {
            "contractUntil" : "2021-06-30",
            "dateOfBirth" : "1987-02-22",
            "jerseyNumber" : 20,
            "name" : "Sergio Romero",
            "nationality" : "Argentina",
            "position" : "Keeper"
        };

        const wrapper = shallow(<PlayerRow player={ player } />);

        expect(wrapper.hasClass('players__row'));
        expect(wrapper.children()).toHaveLength(4);
        expect(wrapper.childAt(0).props().children).toEqual(player.name);
        expect(wrapper.childAt(1).props().children).toEqual(player.position);
        expect(wrapper.childAt(2).props().children).toEqual(player.nationality);
        expect(wrapper.childAt(3).props().children).toEqual(dateToAge(player.dateOfBirth));
    });
});
