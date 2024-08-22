import { Component } from "react";
import { ListGroup, Button } from "react-bootstrap";
import Error from "./Error";
const key =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3MmI2OTI4YWI5NjAwMTU2NjRmMGEiLCJpYXQiOjE3MjQzMjg4MDksImV4cCI6MTcyNTUzODQwOX0.wnBh_-sJ2xk_WEUOpVkm7v46qPvgLfKyFzSFbs1YXJg";

class CommentsList extends Component {
  state = {
    isWrongg: false,
  };

  handleDelete = (id) => {
    fetch(`https://striveschool-api.herokuapp.com/api/cmments/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: key,
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("ELIMINAZIONE RIUSCITA");
        } else {
          this.setState =( { isWrongg: true });
          throw new Error("La chiamata non è andata a buon fine");
        }
      })
      .catch((err) => {
        this.setState = ({ isWrongg: true})
        console.log("ERRORE NEL RECUPERO DATI (internet)?", err);
      });
  };

  render() {
    return (
      <>
        {this.props.comments.map((comment, i) => {
          return (
            <ListGroup.Item key={i} className="text-muted fs-6 display-6">
              {comment.author}
              <br />
              {comment.comment} --- {comment.rate}⭐<br />
              <Button
                type="delete"
                variant="danger"
                onClick={(e) => {
                  e.preventDefault();
                  this.handleDelete(comment._id);
                }}
                className="m-2"
              >
                {" "}
                DELETE{" "}
              </Button>
              {this.state.isWrongg && (
                <>
                  <Error />
                </>
              )}
            </ListGroup.Item>
          );
        })}
      </>
    );
  }
}

export default CommentsList;
