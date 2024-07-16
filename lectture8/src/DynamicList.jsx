import React, { useState } from 'react';

const DynamicList = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const newItem = `${items.length + 1}`;
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h2>Dynamic List</h2>
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicList;
