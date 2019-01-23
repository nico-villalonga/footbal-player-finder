import React from 'react';
import styled from 'styled-components'
import PlayerRow from './PlayerRow';

const Container = styled.div`
    padding: 0 50px;
    padding-bottom: 50px;
`;

const PlayerList = ({ players }) => (
    <Container>
        {
            players.map((player, index) => (
                <PlayerRow
                    key={ index }
                    player={ player }
                />
            ))
        }
    </Container>
);

export default PlayerList;
