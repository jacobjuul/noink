import React, { PropTypes } from 'react';
import './TestItem.scss';

const TestItem = ({ title, status }) => {
  return (
    <div className="TestItem">
      <div className="TestItem-title">{title}</div>
      <div>{status}</div>
    </div>
  )
};

TestItem.displayName = 'TestItem'

TestItem.propTypes = {
  someProp: PropTypes.string,
}

export default TestItem
