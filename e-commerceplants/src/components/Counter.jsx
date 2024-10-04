import React, { useState, useEffect } from "react";

function Counter(props) {
  const [count, setCount] = useState(props.plans);

  useEffect(() => {
    console.log(`Count updated to ${count}`);
  }, [count]);

  return (
    <>
      <div>
        <p>Current count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
        <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
      </div>
    </>
  );
}

export default Counter;
