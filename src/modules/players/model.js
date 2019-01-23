import * as R from 'ramda';
import moment from 'moment';

// It has not test since is a moment.js functionality
// And the test would have to be updated every year
const dateToAge = dateOfBirth => moment().diff(dateOfBirth, 'years');

export const filtersFn = {
    name: name => player => R.test(new RegExp(name, 'g'), R.toLower(player.name)),
    position: position => player => player.position === position,
    age: age => player => dateToAge(player.dateOfBirth) === Number(age),
};

// Perform filter on players only if value from filter is not empty
export const filterByProp = filter => players => {
    const [ key, value ] = Object.entries(filter)[0];
    return R.isEmpty(value)
        ? players
        : R.filter(filtersFn[key](value), players);
}

export const filterPlayers = (filters, players) => {
    const { name, position, age } = filters;

    return R.pipe(
        filterByProp({ name }),
        filterByProp({ position }),
        filterByProp({ age }),
    )(players);
};
