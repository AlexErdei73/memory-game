import "./App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PictureCard from "./components/pictureCard";
import TitleBar from "./components/titleBar";
import { Modal, Button } from "react-bootstrap";
import {
  physicists,
  getInitialRenderOrder,
  generateRandomOrder,
  getVariantName,
  getModalClasses,
  getRandomQuote,
  saveTopScore,
  loadTopScore,
  isMistakeMade,
} from "./helper";

function App() {
  const [renderOrder, setRenderOrder] = useState(getInitialRenderOrder());
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(loadTopScore());
  const [alreadyClicked, setAlreadyClicked] = useState([]);
  const [modal, setModal] = useState({
    id: 0,
    show: false,
    isMistakeMade: false,
  });

  useEffect(() => {
    saveTopScore(highestScore);
  }, [highestScore]);

  const changeScore = (id) => {
    if (isMistakeMade(id, alreadyClicked)) {
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

  const showModal = (id) => {
    const newModal = {
      id: id,
      show: true,
      isMistakeMade: isMistakeMade(id, alreadyClicked),
    };
    setModal(newModal);
  };

  const handleClick = (id) => {
    showModal(id, alreadyClicked);
    changeScore(id);
    setRenderOrder(generateRandomOrder(renderOrder));
  };

  const hideModal = () => {
    const newModal = { ...modal };
    newModal.show = false;
    setModal(newModal);
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
      <Modal show={modal.show} onHide={hideModal}>
        <Modal.Title className={getModalClasses(modal)}>
          {(modal.isMistakeMade && "Ouch!") ||
            physicists[modal.id].name + " quote"}
        </Modal.Title>
        <Modal.Body>
          {(modal.isMistakeMade &&
            "You have lost your score becuse of choosing the same physicist again.") || (
            <p>{getRandomQuote(modal.id)}</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant={getVariantName(modal)} onClick={hideModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
