import { tests } from '../lib/generateTest';
import * as testState from '../consts/testStates';
import {
  TEST_INIT,
  TEST_SUCCESS,
  TEST_FAILED } from '../consts/actionTypes';

const prepareTests = tests => tests.reduce((sum, test, idx) => {
    return {
      ...sum,
      [idx]: {
        id: idx,
        state: testState.NOT_STARTED,
        ...test
      }
    }
  }, {});

const initialState = {
  tests: prepareTests(tests)
};

const redInkReducer = (state = initialState, action) => {
  switch(action.type) {
    case TEST_INIT: {
      return {
        ...state,
        tests: {
          ...state.tests,
          [action.id]: {
          ...state.tests[action.id],
          state: testState.RUNNING
        }
      }
    }
    }

    case TEST_SUCCESS: {
      return {
        ...state,
        tests: {
          ...state.tests,
          [action.id]: {
          ...state.tests[action.id],
          state: testState.PASSED
        }
      }
    }
    }

    case TEST_FAILED: {
      return {
        ...state,
        tests: {
          ...state.tests,
          [action.id]: {
          ...state.tests[action.id],
          state: testState.FAILED
        }
      }
    }
    }

    default: {
      return state;
    }
  }
}

export default redInkReducer;