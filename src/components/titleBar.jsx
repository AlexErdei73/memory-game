import { Navbar, Container } from "react-bootstrap";

const TitleBar = (props) => {
  return (
    <Navbar className="bg-info text-light font-size-xlg" fixed="top">
      <Container>
        <h4>Great Physicists</h4>
        <h4>Score: {props.score}</h4>
        <h4>Top Score: {props.highestScore}</h4>
      </Container>
    </Navbar>
  );
};

export default TitleBar;
