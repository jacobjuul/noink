import { tests } from '../lib/generateTest';
import * as testState from '../consts/testStates';
import {
  TEST_INIT,
  TEST_SUCCESS,
  TEST_FAILED } from '../consts/actionTypes';

const prepareTests = tests => tests.map((test, idx) => {
  return Object.assign(
    {},
    test,
    { id: idx, state: testState.NOT_STARTED}
  );
});

const initialState = {
  tests: prepareTests(tests)
};

const redInkReducer = (state = initialState, action) => {
  switch(action.type) {
    case TEST_INIT: {
      return state;
    }

    case TEST_SUCCESS: {
      return { ...state };
    }

    case TEST_FAILED: {
      return state;
    }

    default: {
      return state;
    }
  }
}

export default redInkReducer;