import { Component } from "react";
import { CardBody, ListGroup, Spinner } from "react-bootstrap";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
const key =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3MmI2OTI4YWI5NjAwMTU2NjRmMGEiLCJpYXQiOjE3MjQzMjg4MDksImV4cCI6MTcyNTUzODQwOX0.wnBh_-sJ2xk_WEUOpVkm7v46qPvgLfKyFzSFbs1YXJg";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
  };

  componentDidMount = () => {
    this.fetchComments();
  };

  fetchComments = () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${this.props.id}`,
      {
        headers: {
          Authorization: key,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("La chiamata non è andata a buon fine");
        }
      })
      .then((arrayOfComments) => {
        console.log("COMMENTI RECUPERATE DAL SERVER", arrayOfComments);
        this.setState({
          comments: arrayOfComments,
          isLoading: false,
        });
        console.log("State", this.state.comments);
      })
      .catch((err) => {
        console.log("ERRORE NEL RECUPERO DATI (internet)?", err);
      });
  };

  render() {
    return (
      <>
        <ListGroup className="list-group-flush">
          {this.state.isLoading ? (
            <ListGroup.Item>
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </ListGroup.Item>
          ) : (
            <CommentsList comments={this.state.comments} />
          )}
        </ListGroup>
        <CardBody>
          <AddComment id={this.props.id} />
        </CardBody>
      </>
    );
  }
}

export default CommentArea;
