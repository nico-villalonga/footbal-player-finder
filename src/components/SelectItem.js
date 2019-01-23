import React from 'react';
import styled from 'styled-components';

// const Container = styled.div``;

const StyledItem = styled.option`
    position: absolute;
    background-color: #ffffff;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 99;
`;

const SelectItem = props => {
    return (
        <StyledItem>
            { props.label }
        </StyledItem>
    );
};

export default SelectItem;
