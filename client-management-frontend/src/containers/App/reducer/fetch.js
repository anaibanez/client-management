import * as keys from '../fetchConstants';

const actionTypeRegexp = /\w+?_(\w+)_(PENDING|REJECTED|FULFILLED)/;

const getActionPromise = (type) => {
  const captureResults = actionTypeRegexp.exec(type);

  if (!captureResults) return {};

  const storeName = captureResults[1];
  const status = captureResults[2];

  return { storeName, status };
};

const defaultPromiseStatus = {
  fetching: false,
  fetched: false,
  error: null,
};

const defaultState = {
  [keys.CLIENTS_FETCH_KEY]: defaultPromiseStatus,
  [keys.CLIENT_DETAIL_FETCH_KEY]: defaultPromiseStatus,
  [keys.CLIENT_FETCH_KEY]: defaultPromiseStatus,
  [keys.CLIENT_UPDATE_FETCH_KEY]: defaultPromiseStatus,
  [keys.CLIENT_CREATE_FETCH_KEY]: defaultPromiseStatus,
};

export default (state = defaultState, { type, payload }) => {
  const { storeName, status } = getActionPromise(type);

  if (!defaultState[storeName]) return state;

  switch (status) {
    case 'PENDING':
      return {
        ...state,
        [storeName]: {
          fetching: true,
          fetched: false,
          error: null,
        },
      };
    case 'REJECTED':
      return {
        ...state,
        [storeName]: {
          fetching: false,
          fetched: false,
          error: payload,
        },
      };
    case 'FULFILLED':
      return {
        ...state,
        [storeName]: {
          fetching: false,
          fetched: true,
          error: null,
        },
      };
    default:
      return state;
  }
};
