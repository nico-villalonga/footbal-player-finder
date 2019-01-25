import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    display: flex;
    width: 220px;
    align-self: center;
    margin-top: 40px;

    &.option-selected {
        margin-top: 14px;
    }

    &:focus {
        border-bottom: 2px solid #6dafd9;
        outline: none;
    }
`;

const Input = styled.div`
    border: none;
    border-bottom: 1px solid #e3e3e3;
    width: 100%;
    padding-bottom: 2px;
    cursor: pointer;

    &.option-selected {
        padding-bottom: 4px;
    }
`;

const Options = styled.div`
    padding: 12px 0;
    position: absolute;
    background-color: #d1d1d1;
    width: 100%;
    top: 24px;
    display: none;

    &.option-selected {
        top: 50px;
    }

    &.visible {
        display: block;
    }
`;

const Option = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 34px;
    padding-left: 10px;

    &.selected,
    &:hover {
        background: #e3e3e3;
    }

    &.option-selected {
        background: none;
        color: #646464;
    }
`;

const OptionLabel = styled.label`
    color: #646464;
    font-size: 14px;
    font-weight: 400;

    &:hover {
        cursor: pointer;
    }
`;

const Label = styled.p`
    color: #d1d1d1;
    font-size: 18px;
    font-weight: 400;
    pointer-events: none;
    margin: 0;
    transition: 0.3s ease all;

    &.option-selected {
        font-size: 12px;
    }
`;

export const optionSelected = selected => selected ? ' option-selected' : '';

export const Select = props => {
    const {
        id,
        autoHide,
        items,
        name,
        onSelect,
        onToggle,
        opened,
        placeHolder,
        selected,
    } = props;

    const handleOnSelect = item => () => {
        onSelect(name, item, true);

        if (autoHide) {
            onToggle();
        }
    };

    const handleToggle = () => {
        onToggle();
    };

    const PlaceHolderLabel = (
        placeHolder
        && (
            <Label className={ `label-placeholder${ optionSelected(selected) }` }>
                { placeHolder }
            </Label>
        )
    );

    return (
        <Container className={ `container${ optionSelected(selected) }` }>
            <Input
                id={ id }
                className={ `select${ optionSelected(selected) }` }
                onClick={ handleToggle }
            >
                { PlaceHolderLabel }

                {
                    selected
                    && (
                        <Option className="option-selected">
                            { selected }
                        </Option>
                    )
                }
            </Input>

            {
                <Options
                    className={`options-list${ optionSelected(selected) } ${ opened ? 'visible' : '' }`}
                >
                {
                    items.map((item, idx) => (
                        <Option
                            key={ idx }
                            className="option"
                            onClick={ handleOnSelect(item) }
                        >
                            <OptionLabel>
                                { item }
                            </OptionLabel>
                        </Option>
                    ))
                }
                </Options>
            }
        </Container>
    );
};

export default Select;

Select.protoTypes = {
    onSelect: PropTypes.func,
    onToggle: PropTypes.func,
}
