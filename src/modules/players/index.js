import * as actions from './actions';
import * as containers from './containers/';
import * as constants from './constants';
import reducer from './reducer';
import saga from './saga';
import * as selectors from './selectors';

export default { actions, constants, reducer, saga };

export const playersContainers = containers;
export const playersSelectors = selectors;
