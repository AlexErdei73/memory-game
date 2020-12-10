import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const PictureCard = (props) => {
  const { content, id, onButtonClick } = props;
  const { name, from, to, image } = content;

  return (
    <div className="col-3 pt-5">
      <Card className="w-75 m-4">
        <Card.Img variant="top" src={image} width="248" height="308" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>
            {from}-{to}
          </Card.Subtitle>
          <Button
            className="btn-sm mt-3"
            variant="primary"
            onClick={() => onButtonClick(id)}
          >
            Choose Me!
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PictureCard;
