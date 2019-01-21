import { combineReducers } from 'redux';

import players from './modules/players';
import filters from './modules/filters';

export default combineReducers({
    [players.constants.NAME]: players.reducer,
    [filters.constants.NAME]: filters.reducer,
});
