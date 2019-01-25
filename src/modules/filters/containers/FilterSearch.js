import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import filters from '../index';
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import Button from '../../../components/Button';

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    padding: 0 50px;
`;

// Named export ONLY for testing.
export class FilterSearch extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            position: '',
            age: '',
            showSelect: false,
        };

        this.positions = [
            '', 'Attacking Midfield', 'Central Midfield', 'Centre-Back',
            'Centre-Forward', 'Defensive Midfield', 'Keeper',
            'Left Midfield', 'Left Wing', 'Left-Back', 'Right-Back',
        ];

        this.handleSearch = this.handleSearch.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.toggleSelect = this.toggleSelect.bind(this);
    }

    handleSearch() {
        const { name, position, age } = this.state;
        this.props.addFilters({ name, position, age});
    }

    handleFilterChange(name, value, validInput) {
        if (validInput) {
            this.setState({ [name]: value.trim() });
        }
    }

    toggleSelect() {
        this.setState({ showSelect: !this.state.showSelect });
    }

    render() {
        return (
            <Container>
                <Input
                    id="player-name"
                    name="name"
                    placeHolder="Player name"
                    pattern="text"
                    onChange={ this.handleFilterChange }
                    value={ this.state.name }
                />

                <Select
                    id="player-position"
                    items={ this.positions }
                    name="position"
                    placeHolder="Player position"
                    opened={ this.state.showSelect }
                    onSelect={ this.handleFilterChange }
                    onToggle={ this.toggleSelect }
                    autoHide={ true }
                    selected={ this.state.position }
                />


                <Input
                    id="player-age"
                    name="age"
                    placeHolder="Age"
                    pattern="numeric"
                    onChange={ this.handleFilterChange }
                    value={ this.state.age }
                />

                <Button
                    id="search-button"
                    variant="outline"
                    label="Search"
                    onClick={ this.handleSearch }
                />
            </Container>
        );
    }
}

export const mapDispatchToProps = dispatch => ({
    addFilters: filtersObj => dispatch(filters.actions.add(filtersObj)),
});

export default connect(null, mapDispatchToProps)(FilterSearch);
