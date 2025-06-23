import React, { useState, useCallback } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const change = useCallback(delta => {
    setCount(prev => prev + delta);
  }, []);

  return (
    <div className="container">
      <h1>{count}</h1>

      <button onClick={() => change(+1)}>+</button>
      <button onClick={() => change(-1)}>-</button>
    </div>
  );
}