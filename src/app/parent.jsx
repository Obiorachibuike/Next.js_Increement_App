import React, { useState, useCallback } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';
import styles from './Parent.module.css';

const Parent = () => {
  const [money, setMoney] = useState(0);

  const incrementMoney = useCallback(() => {
    setMoney(prevMoney => prevMoney + 1000);
  }, []);

  const decrementMoney = useCallback(() => {
    setMoney(prevMoney => prevMoney - 500);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Parent Component</h1>
      <p className={styles.money}>Money: {money}</p>
      <Child1 incrementMoney={incrementMoney} />
      <Child2 decrementMoney={decrementMoney} />
    </div>
  );
};

export default Parent;
