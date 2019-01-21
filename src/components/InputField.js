import React from 'react';
import styled from 'styled-components';

const GroupDiv = styled.div`
    position: relative;
    margin-top: 45px;
`;

const StyledInput = styled.input`
    font-size: 14px;
    padding: 8px 0;
    display: block;
    width: 220px;
    border: none;
    border-bottom: 1px solid #e3e3e3;
    color: #646464;

    &:focus {
        outline: none;
    }

    &:focus ~ label, &:valid ~ label {
        top: -20px;
        font-size: 12px;
        color: #d1d1d1;
    }

    &:focus ~ .bar:before, &:focus ~ .bar:after {
        width: 50%;
    }
`;

const Bar = styled.span.attrs(props => ({
    color: props.color || '#6dafd9',
}))`
    position: relative;
    display: block;
    width: 220px;

    &:before, &:after {
        content: '';
        height: 2px;
        width: 0;
        bottom: 1px;
        position: absolute;
        background: ${ props => props.color };
        transition: 0.2s ease all;
    }

    &:before {
      left: 50%;
    }

    &:after {
      right: 50%;
    }
`;

const StyledLabel = styled.label.attrs(props => ({
    className: props.classes,
}))`
    color: #d1d1d1;
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    top: 10px;
    transition: 0.2s ease all;
`;

const InputField = props =>  {
    const {
        id,
        name,
        placeHolder,
        color,
        onChange,
        pattern,
    } = props;

    const patterns = {
        alphanumeric: /[a-zA-Z0-9]+/,
        numeric: /[0-9]+/,
        text: /[a-zA-Z]+/,
    };

    const isValidInput = (pattern, value) => patterns[pattern].test(value);

    const handleOnChange = event => {
        const value = event.target.value;
        const validInput = isValidInput(pattern, value);

        if (typeof onChange === 'function' && validInput) {
           onChange(name, value, validInput);
        }
    };

    const Label = placeHolder && (
        <StyledLabel>
            { placeHolder }
        </StyledLabel>
    );

    return (
        <GroupDiv className="group">
        <StyledInput
            name={ name }
            id={ id }
            onChange={ handleOnChange }
            required
        />
        <Bar
            className="bar"
            color={ color }
        />
            { Label }
        </GroupDiv>
    );
};

export default InputField;
