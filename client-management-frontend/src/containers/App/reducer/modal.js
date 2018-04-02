import {
  SHOW_MODAL,
  HIDE_MODAL,
} from '../constants';

const initialState = {
  modals: [{
    open: false,
    type: '',
    title: 'error_title_key',
    message: 'error_message_key',
    details: [],
    id: null,
  }],
};

const deleteModal = (modals, idModal) => {
  const copyModals = [...modals];
  const indexToDelete = copyModals.findIndex((modal) => modal.id === idModal);
  copyModals.splice(indexToDelete, 1);
  return copyModals;
};

function modalReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SHOW_MODAL:
      return {
        modals: state.modals.concat([{
          ...payload,
          open: true,
          id: Date.now(),
        }]),
      };
    case HIDE_MODAL:
      return {
        modals: deleteModal(state.modals, payload),
      };
    default:
      return state;
  }
}

export default modalReducer;
