import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import Typed from "react-typed";

function Home() {
  return (
    <Jumbotron fluid bsPrefix="jumbotron" id='home'>
      <Container>
        <Typed
          className="jumbotron-name"
          strings={["Harrison Su"]}
          typeSpeed={150}          
        />
        <p className="jumbotron-text">
          I'm a junior studying Computer Science at the University of Nevada,
          Las Vegas who's passionate about learning the technologies that affect us.
        </p>
      </Container>
    </Jumbotron>
  );
}

export default Home;
