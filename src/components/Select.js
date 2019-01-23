import React from 'react';
import styled from 'styled-components';

const GroupDiv = styled.div`
    position: relative;
    margin-top: 45px;
`;

const StyledSelect = styled.select`
    font-size: 14px;
    padding: 8px 0;
    display: block;
    width: 220px;
    border: none;
    border-bottom: 1px solid #e3e3e3;
    color: #646464;
    background-color: #ffffff;

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

const Select = props =>  {
    const {
        id,
        name,
        placeHolder,
        color = '#6dafd9',
        onChange,
    } = props;

    const handleOnChange = event => {
        const value = event.target.value;
        if (typeof onChange === 'function') {
           onChange(name, value, true);
        }
    };

    const Label = placeHolder && (
        <StyledLabel>
            { placeHolder }
        </StyledLabel>
    );

    return (
        <GroupDiv className="custom-select">
            <StyledSelect
                id={ id }
                name={ name }
                className="select"
                onChange={ handleOnChange }
                required
            >
                { props.children }
            </StyledSelect>
            <Bar
                className="bar"
                color={ color }
            />
            { Label }
        </GroupDiv>
    );
};

export default Select;
