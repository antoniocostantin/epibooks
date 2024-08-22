import { Component } from "react";
import { Form, Button } from "react-bootstrap";
const key =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3MmI2OTI4YWI5NjAwMTU2NjRmMGEiLCJpYXQiOjE3MjQzMjg4MDksImV4cCI6MTcyNTUzODQwOX0.wnBh_-sJ2xk_WEUOpVkm7v46qPvgLfKyFzSFbs1YXJg";

class AddComment extends Component {
  state = {
    newcomment: {
      'comment': "",
      'rate': "",
      elementId: this.props.id,
    },
  };

  handleChange = (e, property) => {
    this.setState({
      newcomment: {
        ...this.state.newcomment,
        [property]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props.elementId)
    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${key}`,
        },
        body: JSON.stringify(this.state.newcomment),
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log("prenotazione salvata");
          alert("grazie!");
          this.setState({
            newcomment: {
              comment: "",
              rate: "",
              elementId: "",
            },
          });
        } else {
          alert("riprova più tardi");
          throw new Error("errore!");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <fieldset>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="TextInput">Add Comment</Form.Label>
            <Form.Control
              id="TextInput"
              placeholder="Write your comment"
              onChange={(e) => this.handleChange(e, "comment")}
              value={this.state.newcomment.comment}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="Select">Add Rating</Form.Label>
            <Form.Select
              id="Select"
              onChange={(e) => this.handleChange(e, "rate")}
              value={this.state.newcomment.rate}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Select>
          </Form.Group>
          <Button type="submit" variant="outline-dark">
            Submit
          </Button>
        </fieldset>
      </Form>
    );
  }
}

export default AddComment;
