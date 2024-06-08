"use client"
import React, { useState, useCallback } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

const Parent = () => {
  const [money, setMoney] = useState(0);

  const incrementMoney = useCallback(() => {
    setMoney(prevMoney => prevMoney + 1000);
  }, []);

  const decrementMoney = useCallback(() => {
    setMoney(prevMoney => prevMoney - 500);
  }, []);

  return (
    <div className="container">
      <h1 className="title">Parent Component</h1>
      <p className="money">Money: {money}</p>
      <Child1 incrementMoney={incrementMoney} />
      <Child2 decrementMoney={decrementMoney} />
    </div>
  );
};

export default Parent;
