import React from 'react';
import { useClickContext } from './contexts/ClickContext';

export default () => {
  const { increment, decrement } = useClickContext();
  return (
    <div>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
    </div>
  );
};
