import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class CommentsList extends Component {
  render() {
    return (
      <>
        {this.props.comments.map((comment) => {
          return <ListGroup.Item><p className="text-muted fs-6 display-6">{comment.author}<br/>{comment.comment}---{comment.rate}⭐</p></ListGroup.Item>;
        })}
      </>
    );
  }
}

export default CommentsList;
