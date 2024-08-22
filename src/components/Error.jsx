import { Component } from "react";
import { Alert } from "react-bootstrap";

class Error extends Component {
  render() {
    return (
      <>
        <Alert variant='danger' className="my-3">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p> Something went wrong try again</p>
        </Alert>
      </>
    );
  }
}

export default Error