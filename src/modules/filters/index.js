import * as actions from './actions';
import * as containers from './containers/';
import * as constants from './constants';
import reducer from './reducer';
import * as selectors from './selectors';

export default { actions, constants, reducer };

export const filtersContainers = containers;
export const filtersSelectors = selectors;
