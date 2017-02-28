import {
  TESTS_START,
  TEST_INIT,
  TEST_SUCCESS,
  TEST_FAILED
} from '../consts/actionTypes';

const onTestCompleted = (dispatch, id) => completed => {
    completed
    ? dispatch({ type: TEST_SUCCESS, id })
    : dispatch({ type: TEST_FAILED, id })
}

export const startTests = () => (dispatch, getState) => {
  const { tests } = getState().test;
  Object.keys(tests).forEach(test => {
    console.log(tests[test])
    dispatch({ type: TEST_INIT, id: tests[test].id });
    tests[test].run(onTestCompleted(dispatch, tests[test].id))
  });
}
