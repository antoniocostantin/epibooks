import { Card, Col, ListGroup} from "react-bootstrap";

const SingleBook = (props) => (
  <Col xs={12} md={4} key={props.book.asin}>
    <Card className="book-cover d-flex flex-column">
      <Card.Img variant="top" src={props.book.img} />
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className="text-center text-secondary">{props.book.category}</ListGroup.Item>
      </ListGroup>
    </Card>
  </Col>
);

export default SingleBook;
