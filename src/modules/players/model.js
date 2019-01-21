import { filter, toLower } from 'ramda';
import moment from 'moment';

export const filterByName = name => players =>
    filter(player => name ? toLower(player.name).includes(toLower(name)) : true, players);

export const filterByPosition = position => players =>
    filter(player => position ? player.position === position : true, players);

export const filterByAge = age => players =>
    filter(player => age ? moment().diff(player.dateOfBirth, 'years') === Number(age) : true, players);
