import React from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";

function About() {
  return (
    <Jumbotron fluid className="mx-auto" bsPrefix="jumbo-about">
      <div id="rect">
        <div className="circle" id="exit"></div>
        <div className="circle" id="min"></div>
        <div className="circle" id="expand"></div>
      </div>

      <div className="about-container">
        <p className="about-text">
          &gt; Harrison.location
          <p className="info">["Las Vegas", "Nevada"]</p>
        </p>
        <p className="about-text">
          &gt; Harrison.contactInfo
          <p className="info">
            ["hrrsnsu@gmail.com", "{""}
            <a href="https://www.linkedin.com/in/harrison-su-4919a9140/">
              LinkedIn
            </a>
            ", "<a href="https://www.instagram.com/hrrsnsu/">instagram</a>"]
          </p>
        </p>
        <p className="about-text">
          &gt; Harrison.education
          <p className="info">
            ["University of Nevada, Las Vegas", "BS in Computer Science"]
          </p>
        </p>
        <p className="about-text">
          &gt; Harrison.hobbies
          <p className="info">
            ["Video Games", "Guitar", "Music Production", "Cooking"]
          </p>
        </p>
        <p className="about-text">
          &gt; Harrison.skills
          <p className="info">
            ["C++", "Python", "HTML", "CSS", "React", "JavaScript"]
          </p>
        </p>
        <p className="about-text">&gt; _</p>
      </div>
    </Jumbotron>
  );
}

export default About;
