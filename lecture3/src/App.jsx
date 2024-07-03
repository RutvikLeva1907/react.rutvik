import React from "react";
import Count from "./Count";

function App() {
  return (
    <div>
      <Count initial={0} add={2} remove={1} />
    </div>
  );
}

export default App;