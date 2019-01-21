import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    margin: 0 50px;
    border: 1px solid #000000;
`;

const Label = styled.h3``;

const SearchResult = props => (
    <Container>
        <Label>{ props.label }</Label>
    </Container>
);

export default SearchResult;
