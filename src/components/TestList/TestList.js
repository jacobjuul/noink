import React, { PropTypes } from 'react';
import TestItem from '../TestItem/TestItem';

const TestList = ({ tests, startTests }) => {
  const renderTestItems = tests =>
    tests.map(test => (
      <TestItem
        key={test.id}
        title={test.description}

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
