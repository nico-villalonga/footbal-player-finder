import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button.attrs(props => ({
    className: props.classes,
    disabled: props.disabled,
}))`
    background: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    height: 36px;
    line-height: 36px;
    outline: none;
    padding: 0 16px;
    text-transform: uppercase;
    width: 140px;
    height: 60px;

    &.outline {
        color: #6dafd9;
        background: #ffffff;
        border: 1px solid #6dafd9;

        &:hover {
            color: #ffffff;
            background: #6dafd9;
        }

        &:active {
            background: #bbdcef;
        }

        &:disabled {
            color: #d1d1d1;
            background: #ffffff;
            border: 1px solid #d1d1d1;
        }
    }

    &:disabled {
        color: #d1d1d1;
        cursor: default;
    }
`;

const Button = props => {
    const {
        id,
        variant,
        label,
        onClick,
    } = props;

    return (
        <ButtonWrapper
            id={ id }
            classes={ variant }
            onClick={ onClick }
        >
            { label }
        </ButtonWrapper>
    );
};

export default Button;
