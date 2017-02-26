import { connect } from 'react-redux';
import TestList from '../components/TestList/TestList';
import { startTests } from '../actions/test-actions';

const mapStateToProps = state => ({
  tests: state.test.tests
});

export default connect(
  mapStateToProps,
  { startTests })(TestList);