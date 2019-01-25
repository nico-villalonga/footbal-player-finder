import React from 'react';
import styled from 'styled-components'
import { RowContainer, RowBlock } from './PlayerRow';

const headerTitles = ['Player', 'Position', 'Nationality', 'Age'];

const Container = styled.div`
    margin: 0 50px;
    margin-top: 50px;
`;

const PlayerListHeader = () => (
    <Container>
        <RowContainer className="header">
            {
                headerTitles.map((title, index) => (
                    <RowBlock key={ index }>
                        { title }
                    </RowBlock>
                ))
            }
        </RowContainer>
    </Container>
);

export default PlayerListHeader;
