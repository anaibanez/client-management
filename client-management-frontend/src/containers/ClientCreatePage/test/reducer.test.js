
import createClientReducer from '../reducer';
import {
  changeField,
} from '../actions';

describe('createClientReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      clientCreate: {},
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(createClientReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeField action correctly', () => {
    const name = 'testName';
    const expectedResult = { ...state, clientCreate: { ...state.clientCreate, name } };

    expect(createClientReducer(state, changeField({ name }))).toEqual(expectedResult);
  });
});
