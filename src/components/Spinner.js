import React from 'react';
import styled, { keyframes } from 'styled-components';


const Spin = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;

const Container = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    -webkit-animation: ${ Spin } 2s linear infinite;
    animation: ${ Spin } 2s linear infinite;
`;


const Spinner = () => (
    <Container className="spinner" />
);

export default Spinner;
