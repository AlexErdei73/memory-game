import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PictureCard from "./components/pictureCard";

function App() {
  const initialState = {
    physicists: [
      {
        name: "Isaac Newton",
        from: "1643",
        to: "1727",
        image: "./images/isaac-newton.jpg",
      },
    ],
  };

  const [state, setState] = useState(initialState);

  return (
    <div className="App">
      <div className="cardContainer">
        <div className="row">
          <PictureCard content={state.physicists[0]} />
        </div>
        <div className="row">second line</div>
        <div className="row">third line</div>
      </div>
    </div>
  );
}

export default App;
