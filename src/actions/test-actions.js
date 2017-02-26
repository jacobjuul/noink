import {
  TESTS_START,
  TEST_INIT,
  TEST_SUCCESS,
  TEST_FAILED
} from '../consts/actionTypes';

const onTestCompleted = (dispatch, id) => completed => {
  dispatch({
    type: completed
    ? dispatch({ type: TEST_SUCCESS, id })
    : dispatch({ type: TEST_FAILED, id })
  })
}

export const startTests = () => (dispatch, getState) => {
  const { tests } = getState().test;


  tests.forEach(test => {
    dispatch({ type: TEST_INIT, id: test.id });
    test.run(onTestCompleted(dispatch, test.id))
  });
}