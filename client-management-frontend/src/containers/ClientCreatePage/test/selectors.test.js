import {
  selectClientUpdate,
} from '../selectors';

describe('selectClientUpdate', () => {
  it('should select the client create state', () => {
    const clientCreateState = {
      clientCreate: {},
    };
    const mockedState = {
      clientCreate: clientCreateState,
    };
    expect(selectClientUpdate(mockedState)).toEqual(clientCreateState);
  });
});
