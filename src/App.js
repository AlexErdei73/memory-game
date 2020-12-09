import "./App.css";
import React, { useState } from "react";

function App() {
  const initialState = {
    physicists: [
      {
        name: "Isaac Newton",
        from: "1643",
        to: "1727",
        image: "../Public/images/isaac-newton.jpg",
      },
    ],
  };

  const [state, setState] = useState(initialState);

  return (
    <div className="App">
      <div className="cardContainer">
        <div className="row">first line</div>
        <div className="row">second line</div>
        <div className="row">third line</div>
      </div>
    </div>
  );
}

export default App;
