import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

function InterestJumbo() {
  return (
    <Jumbotron fluid bsPrefix="jumbotron" id='interests'>
      <Container>
        <h1 className="projects-header">Interests</h1>
      </Container>
    </Jumbotron>
  );
}

export default InterestJumbo;
