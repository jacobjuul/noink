import React, { PropTypes } from 'react';
import * as testStates from '../../consts/testStates';
import './TestItem.scss';

const TestItem = ({ title, status }) => {
  const getStatusColor = (status) => {
    switch(status) {
      case testStates.NOT_STARTED: {
        return 'black'
      }
      case testStates.RUNNING: {
        return 'orange';
      }

      case testStates.FAILED: {
        return 'red'
      }
      case testStates.PASSED: {
        return 'green'
      }
    }
  }
  const styles = {
    status: {
      color: getStatusColor(status)
    }
  }
  return (
    <div className="TestItem">
      <div className="TestItem-title">{title}</div>
      <div style={styles.status}>{status}</div>
    </div>
  )
};

TestItem.displayName = 'TestItem'

TestItem.propTypes = {
  someProp: PropTypes.string,
}

export default TestItem
