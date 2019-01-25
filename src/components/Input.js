import React from 'react';
import PropTypes from 'prop-types';
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
    cursor: pointer;

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
    color: props.color,
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

export const patterns = {
    alphanumeric: /[a-zA-Z0-9]+/,
    numeric: /^\d+$/,
    text: /^[a-z A-Z]+$/,
};

export const isValidInput = (pattern, value) => !value || patterns[pattern].test(value);

const Input = props =>  {
    const {
        id,
        name,
        placeHolder,
        color = '#6dafd9',
        onChange,
        pattern = 'alphanumeric',
        value,
    } = props;

    const handleOnChange = event => {
        const value = event.target.value;
        const validInput = isValidInput(pattern, value);
        onChange(name, value, validInput);
    };

    const Label = placeHolder && (
        <StyledLabel>
            { placeHolder }
        </StyledLabel>
    );

    return (
        <GroupDiv className="group">
            <StyledInput
                id={ id }
                name={ name }
                onChange={ handleOnChange }
                value={ value }
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

// TODO: this should be a reutilized style component
// (perhaps hoc? )together with Select.
export default Input;

Input.propTypes = {
    onChange: PropTypes.func,
}
