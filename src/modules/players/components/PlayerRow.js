import React from 'react';
import moment from 'moment';
import styled from 'styled-components'

export const RowContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 90px;

    &:nth-child(even) {
        background-color: #d1d1d1;
    }

    &:nth-child(odd) {
        background-color: #ffffff;
    }

    &.header {
        color: #ffffff;
        background-color: #8b8b8b;
    }
`;

export const RowBlock = styled.div`
    width: 100%;
    border: 1px solid #000000;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PlayerRow = ({ player }) => (
    <RowContainer className="players__row">
        <RowBlock className="row__block">
            { player.name }
        </RowBlock>

        <RowBlock>
            { player.position }
        </RowBlock>

        <RowBlock>
            { player.nationality }
        </RowBlock>

        <RowBlock>
            { moment().diff(player.dateOfBirth, 'years') }
        </RowBlock>
    </RowContainer>
);

export default PlayerRow;
