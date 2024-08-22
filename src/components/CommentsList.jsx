import { Component } from "react";
import { ListGroup, Button } from "react-bootstrap";
const key =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3MmI2OTI4YWI5NjAwMTU2NjRmMGEiLCJpYXQiOjE3MjQzMjg4MDksImV4cCI6MTcyNTUzODQwOX0.wnBh_-sJ2xk_WEUOpVkm7v46qPvgLfKyFzSFbs1YXJg";

class CommentsList extends Component {
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
                  fetch(
                    `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
                    {
                      method: "DELETE",
                      headers: {
                        Authorization: key,
                      },
                    }
                  )
                    .then((response) => {
                      if (response.ok) {
                        alert("ELIMINAZIONE RIUSCITA");
                      } else {
                        throw new Error("La chiamata non è andata a buon fine");
                      }
                    })
                    .catch((err) => {
                      console.log("ERRORE NEL RECUPERO DATI (internet)?", err);
                    });
                }}
                className="m-2"
              >
                {" "}
                DELETE{" "}
              </Button>
            </ListGroup.Item>
          );
        })}
      </>
    );
  }
}

export default CommentsList;
