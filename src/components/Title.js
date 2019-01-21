import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.h1`
    margin-bottom: 0;
    padding-left: 50px;
`;

const Title = props => (
    <TitleStyle>
        { props.label }
    </TitleStyle>
);

export default Title;
