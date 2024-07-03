import React, { useState } from "react";

const Count = ({ initial, add, remove }) => {
    // Initialize count state
    const [count, setCount] = useState(initial);

    // Function to increment count
    const handleIncrement = () => {
        setCount(prevCount => prevCount + add);
    };

    // Function to decrement count
    const handleDecrement = () => {
        setCount(prevCount => prevCount - remove);
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default Count;
