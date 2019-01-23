import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import filters from '../index';
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import SelectItem from '../../../components/SelectItem';
import Button from '../../../components/Button';

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    padding: 0 50px;
`;

class FilterSearch extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            playerName: '',
            playerPosition: '',
            playerAge: '',
        };

        this.positions = [
            '', 'Attacking Midfield', 'Central Midfield', 'Centre-Back',
            'Centre-Forward', 'Defensive Midfield', 'Keeper',
            'Left Midfield', 'Left Wing', 'Left-Back', 'Right-Back',
        ];

        this.handleSearch = this.handleSearch.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSearch() {
        const getNodeValue = name => document.getElementsByName(name)[0].value.trim();
        const filters = {
            name: getNodeValue('playerName'),
            position: getNodeValue('playerPosition'),
            age:getNodeValue('playerAge'),
        };

        this.props.addFilters(filters);
    }

    handleInputChange(name, value, validInput) {
        if (this.state[name] !== value && validInput) {
            this.setState({ [name]: value });
        }
    }

    render() {
        return (
            <Container>
                <Input
                    name="playerName"
                    placeHolder="Player name"
                    pattern="alphanumeric"
                    onChange={ this.handleInputChange }
                />

                <Select
                    name="playerPosition"
                    placeHolder="Player position"
                    onChange={ this.handleInputChange }
                >
                    {
                        this.positions.map((position, idx) => (
                            <SelectItem
                                key={ idx }
                                label={ position }
                            />
                        ))
                    }
                </Select>

                <Input
                    name="playerAge"
                    placeHolder="Age"
                    pattern="numeric"
                    onChange={ this.handleInputChange }
                />

                <Button
                    variant="outline"
                    label="Search"
                    onClick={ this.handleSearch }
                />
            </Container>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addFilters: filtersObj => dispatch(filters.actions.add(filtersObj)),
});

export default connect(null, mapDispatchToProps)(FilterSearch);
