import React, { PropTypes } from 'react';
import TestItem from '../TestItem/TestItem';

const TestList = ({ tests, startTests }) => {
  console.log(tests)
  const renderTestItems = tests =>
    Object.keys(tests)
      .map(test => (
      <TestItem
        key={tests[test].id}
        title={tests[test].description}
        status={tests[test].state}
      />
    ));

  return (
    <div className="TestList">
      <button onClick={startTests}>Start Tests</button>
      <div className="TestList-title">Tests</div>
      {renderTestItems(tests)}
    </div>
  )
};

TestList.displayName = 'TestList'

TestList.propTypes = {
  someProp: PropTypes.string,
}

export default TestList
