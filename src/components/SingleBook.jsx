import { Component } from "react";
import CommentArea from './CommentArea'
import { Card, Button } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        {!this.state.selected ? (
          <Card
            className="book-cover d-flex flex-column"
            onClick={() => {
              if (this.state.selected) {
                this.setState({
                  selected: false,
                });
              } else {
                this.setState({
                  selected: true,
                });
              }
            }}
          >
            <Card.Img variant="top" src={this.props.book.img} />
            <Card.Body>
              <Card.Title>{this.props.book.title}</Card.Title>
            </Card.Body>
            <Button variant="outline-secondary" className="m-auto my-3">
              Buy at {this.props.book.price}$
            </Button>
          </Card>
        ) : (
          <>
            <Card
              className="book-cover d-flex flex-column border-3 border-danger"
            >
              <Card.Img variant="top" src={this.props.book.img} onClick={() => {
                if (this.state.selected) {
                  this.setState({
                    selected: false,
                  });
                } else {
                  this.setState({
                    selected: true,
                  });
                }
              }}/>
              <Card.Body onClick={() => {
                if (this.state.selected) {
                  this.setState({
                    selected: false,
                  });
                } else {
                  this.setState({
                    selected: true,
                  });
                }
              }}>
                <Card.Title>{this.props.book.title}</Card.Title>
              </Card.Body>
              <Button variant="outline-secondary" className="m-auto my-3">
                {" "}
                Buy at {this.props.book.price}$
              </Button>
            <CommentArea id={this.props.book.asin} />
            </Card>
          </>
        )}
      </>
    );
  }
}

export default SingleBook;
