import React, { useState } from 'react';

function Counter(props) {

    const [count, setCount] = useState(props.plans);

    return(
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