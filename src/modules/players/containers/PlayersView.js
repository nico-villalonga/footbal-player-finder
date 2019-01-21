import React, { Component } from 'react';
import { connect } from 'react-redux';

import players, { playersSelectors } from '../index';
import { filtersContainers } from '../../filters';
import Title from '../../../components/Title';
import WithSpinner from '../../../hoc/WithSpinner';
import PlayerListHeader from '../components/PlayerListHeader';
import PlayersList from '../components/PlayersList';

const FilterSearch = filtersContainers.FilterSearch;
const ListWithSpinner = WithSpinner('players')(PlayersList);

class PlayersView extends Component {
	componentDidMount() {
        this.props.fetchPlayers();
	}

	render() {
        const { hasError, isFetching, players } = this.props;

		return (
            <div className="players__view">
                <Title label="Football Player Finder"/>
                <FilterSearch />

                <PlayerListHeader />
                <ListWithSpinner
                    hasError={ hasError }
                    isFetching={ isFetching }
                    players={ players }
                />
            </div>
		);
	}
}

const mapStateToProps = state => ({
    hasError: playersSelectors.getError(state),
    isFetching: playersSelectors.getFetching(state),
    players: playersSelectors.getFiltered(state),
});

const mapDispatchToProps = dispatch => ({
  	fetchPlayers: () => dispatch(players.actions.fetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayersView);
