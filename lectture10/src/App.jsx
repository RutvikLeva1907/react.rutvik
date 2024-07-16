// import React from 'react'

// const App = () => {
//   return (
//     <div></div>
//   )
// }

// export default App



import React from 'react';

const App = ({ name }) => {
 
  const defaultGreeting = 'Welcome!';


  const messege = name ? `Hello, ${name}!` : defaultGreeting;

  return (
    <div>
      <h1>{messege}</h1>
    </div>
  );
};

export default App;
