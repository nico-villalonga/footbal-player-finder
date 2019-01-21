import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import filters from '../index';
import InputField from '../../../components/InputField';
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
                <InputField
                    name="playerName"
                    placeHolder="Player name"
                    pattern="alphanumeric"
                    onChange={ this.handleInputChange }
                />
                <InputField
                    name="playerPosition"
                    placeHolder="Position"
                    onChange={ this.handleInputChange }
                />
                <InputField
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
