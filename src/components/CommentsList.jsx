import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class CommentsList extends Component {
  render() {
    return (
      <>
        {this.props.comments.map((comment) => {
          return <ListGroup.Item>{comment.comment}</ListGroup.Item>;
        })}
      </>
    );
  }
}

export default CommentsList;
