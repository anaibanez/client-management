import { SET_USER, HIDE_MODAL, SHOW_MODAL } from './constants';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const showModal = (options) => ({
  type: SHOW_MODAL,
  payload: options,
});

export const showError = ({ parsedBody: { details = [] }, message }) => showModal({
  title: 'Error ocurred',
  message: message || 'Something went wrong, please try again',
  details,
  type: 'error',
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});
