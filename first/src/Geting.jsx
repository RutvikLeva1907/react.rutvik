import React from 'react';

function Greeting({ name }) {
  return (
    <div>
      <h1>{name ? `Hello, ${name}!` : 'Welcome, Guest!'}</h1>
    </div>
  );
}

export default Greeting;
