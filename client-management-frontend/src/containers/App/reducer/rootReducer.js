import { combineReducers } from 'redux';

import user from './user';
import modal from './modal';
import fetch from './fetch';

export default combineReducers({
  user,
  modal,
  fetch,
});
