import {
  GET_DETAIL,
} from '../constants';

import {
  getDetail,
} from '../actions';

describe('Client Detail Actions', () => {
  describe('getDetail', () => {
    it('should return the correct type and the passed id', () => {
      const id = 4;
      const expectedResult = {
        type: GET_DETAIL,
        payload: id,
      };

      expect(getDetail(id)).toEqual(expectedResult);
    });
  });
});
