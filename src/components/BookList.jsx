import { Row, Col, InputGroup, Form, Container } from "react-bootstrap";
import { Component } from "react";
import fantasy from "../data/horror.json";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    activesearch: "",
  };
  render() {
    return (
      <>
        <Container>
          <Row className="justify-content-md-center">
            <Col md={6}>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </InputGroup.Text>
                <Form.Control
                  placeholder="search"
                  aria-label="search"
                  aria-describedby="basic-addon1"
                  onChange={(e) => {
                    this.setState({
                      activesearch: e.target.value,
                    });
                  }}
                />
              </InputGroup>
            </Col>
          </Row>
        </Container>
        <Row className="g-4">
          {fantasy.map((book, i) => {
            return (
              <>
                {book.title.includes(this.state.activesearch) && (
                  <Col xs={12} md={4} lg={3} key={i}>
                    <SingleBook book={book} search={this.state.activesearch} />
                  </Col>
                )}
              </>
            );
          })}
        </Row>
      </>
    );
  }
}

export default BookList;
