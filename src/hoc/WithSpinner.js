import React from 'react';
import Spinner from '../components/Spinner';
import SearchResult from '../components/SearchResult';
// import ErrorPlaceholder from '../components/';

const withSpinner = propName => WrappedComponent => props => {
    const isEmpty = prop => (
        prop === null
        || prop === undefined
        || (Array.isArray(prop) && prop.length === 0)
        || (prop.constructor === Object && Object.keys(prop).length === 0)
    );

    if (props.hasError) {
        return <SearchResult label="An error has occured!"/>;
    }

    if (props.isFetching) {
        return <Spinner />;
    }

    return isEmpty(props[propName])
        ? <SearchResult label="No results found!"/>
        : <WrappedComponent { ...props } />
};

export default withSpinner;