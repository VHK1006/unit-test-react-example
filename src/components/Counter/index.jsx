import React, { useState } from 'react';
import './counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h1 data-test="counter-display">
        The counter is currently&nbsp;
        <span data-test="count">{count}</span>
      </h1>
      {count <= 0 && <h1 style={{ color: "red" }}>The counter cannot go below 0</h1>}
      <button
        className="increment-button"
        onClick={() => setCount(count + 1)}
      >
        Increment counter
      </button>
      <button
        className="decrement-button"
        onClick={() => setCount(count - 1)}
        disabled={count <= 0}
      >
        Decrement counter
      </button>
    </div>
  )
}

export default Counter;