import { Navbar, Container, Col } from "react-bootstrap";

const TitleBar = (props) => {
  return (
    <Navbar className="bg-info text-light" fixed="top">
      <Container>
        <h1>Great Physicists</h1>
        <h2>Score: {props.score}</h2>
        <h2>Top Score: {props.highestScore}</h2>
      </Container>
    </Navbar>
  );
};

export default TitleBar;
