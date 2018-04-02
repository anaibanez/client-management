/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import globalReducer from './containers/App/reducer/rootReducer';

export default function createReducer(injectedReducers) {
  return combineReducers({
    router: routerReducer,
    global: globalReducer,
    ...injectedReducers,
  });
}
