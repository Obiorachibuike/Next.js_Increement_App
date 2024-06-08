import React from 'react';

const Child2 = ({ decrementMoney }) => {
  return (
    <div className="child-container">
      <h2>Child 2 Component</h2>
      <button className="button button-decrement" onClick={decrementMoney}>Decrement by 500</button>
    </div>
  );
};

export default Child2;
