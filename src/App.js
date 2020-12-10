import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PictureCard from "./components/pictureCard";
import TitleBar from "./components/titleBar";
import { Modal, Button } from "react-bootstrap";

function App() {
  const physicists = [
    {
      name: "Isaac Newton",
      from: "1643",
      to: "1727",
      image: "./images/isaac-newton.jpg",
    },
    {
      name: "Albert Einstein",
      from: "1879",
      to: "1955",
      image: "./images/albert-einstein.png",
    },
    {
      name: "Abdus Salam",
      from: "1879",
      to: "1955",
      image: "./images/abdus-salam.jpg",
    },
    {
      name: "Erwin Schrodinger",
      from: "1879",
      to: "1955",
      image: "./images/erwin-schrodinger.jpg",
    },
    {
      name: "Galileo Galilei",
      from: "1879",
      to: "1955",
      image: "./images/galileo-galilei.jpg",
    },
  ];

  const initialRenderOrder = [4, 0, 1, 3, 2];

  const [renderOrder, setRenderOrder] = useState(initialRenderOrder);
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [alreadyClicked, setAlreadyClicked] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const generateRandomOrder = () => {
    let len = renderOrder.length;
    const copyRenderOrder = [...renderOrder];
    const newRenderOrder = [];
    let index;
    while (len > 0) {
      index = Math.floor(Math.random() * len);
      newRenderOrder.push(copyRenderOrder[index]);
      copyRenderOrder.splice(index, 1);
      len--;
    }
    setRenderOrder(newRenderOrder);
  };

  const changeScore = (id) => {
    let isMistakeMade = false;
    alreadyClicked.forEach((index) => {
      if (index === id) {
        isMistakeMade = true;
      }
    });
    if (isMistakeMade) {
      if (score > highestScore) {
        setHighestScore(score);
      }
      setScore(0);
      setAlreadyClicked([]);
    } else {
      const copyAlreadyClicked = [...alreadyClicked];
      copyAlreadyClicked.push(id);
      setAlreadyClicked(copyAlreadyClicked);
      setScore(score + 1);
    }
  };

  const handleClick = (id) => {
    setShowModal(true);
    changeScore(id);
    generateRandomOrder();
  };

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App bg-secondary">
      <TitleBar score={score} highestScore={highestScore} />
      <div className="cardContainer">
        <div className="row">
          {renderOrder.map((index) => {
            return (
              <PictureCard
                content={physicists[index]}
                key={index}
                id={index}
                onButtonClick={(id) => handleClick(id)}
              />
            );
          })}
        </div>
      </div>
      <Modal show={showModal} hide={hideModal}>
        <Modal.Title bg="success" text="light">
          Title
        </Modal.Title>
        <Modal.Body>This is the body</Modal.Body>
        <Modal.Footer>
          <Button onClick={hideModal}>OK</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
