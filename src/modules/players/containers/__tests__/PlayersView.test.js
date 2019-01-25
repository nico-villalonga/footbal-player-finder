import React from 'react';
import { shallow } from 'enzyme';

import { PlayersView, mapDispatchToProps } from '../PlayersView';

require('../../../../setup');


describe('test PlayersView container', () => {
    it('should dispatch fetchPlayers on componentDidMount', () => {
        const dispatch = jest.fn();
        const dispatchProp = mapDispatchToProps(dispatch);

        jest.spyOn(dispatchProp, 'fetchPlayers');
        shallow(<PlayersView fetchPlayers={ dispatchProp.fetchPlayers } />);

        expect(dispatchProp.fetchPlayers).toHaveBeenCalled();
    });

    it('should mount the component', () => {
        const fetchPlayers = jest.fn();
        const props = {
            hasError: false,
            isFetching: false,
            players: [],
        };

        const wrapper = shallow(<PlayersView { ...props } fetchPlayers={ fetchPlayers } />);

        expect(wrapper.hasClass('players__view')).toBeTruthy();
        expect(wrapper.children()).toHaveLength(4);
    });
});
