import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

function ProjectJumbo() {
  return (
    <Jumbotron fluid bsPrefix="jumbotron" id='projects'>
      <Container>
          <h1 className="projects-header">Projects</h1>
      </Container>
    </Jumbotron>
  );
}

export default ProjectJumbo;
