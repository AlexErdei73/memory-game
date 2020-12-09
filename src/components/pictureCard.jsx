import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const PictureCard = (props) => {
  const { name, from, to, image } = props.content;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>
          {from}-{to}
        </Card.Subtitle>
        <Button
          variant="primary"
          onClick={() => {
            console.log(image);
          }}
        >
          Choose Me!
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PictureCard;
