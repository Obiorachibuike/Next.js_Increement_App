import React from 'react';

const Child1 = ({ incrementMoney }) => {
  return (
    <div className="child-container">
      <h2>Child 1 Component</h2>
      <button className="button button-increment" onClick={incrementMoney}>Increment by 1000</button>
    </div>
  );
};

export default Child1;
