import React from "react";
import { CardDeck, Card, Button, CardGroup, } from "react-bootstrap";

function ProjectCards() {
  return (
    <CardGroup bsPrefix="cardDeck" style={{ display: "flex", flexDirection: "column" }}>
      <Card bsPrefix="card" border="secondary">
        <Card.Body>
          <Card.Title>Tinder Clone</Card.Title>
          <Card.Text>
            Created a Front-End Tinder clone that is connected to Firebase. The
            clone has basic functionality. You can swipe and click on header
            buttons to go to different pages.
          </Card.Text>
          <Button
            href="https://tinder-clone-9234d.web.app/" 
            variant="secondary"
            target="_blank"
          >
            Check it out
          </Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated on 2/28/21</small>
        </Card.Footer>
      </Card>

      <Card bsPrefix="card" border="secondary">
        <Card.Body>
          <Card.Title>LifeProTips Twitter Bot</Card.Title>
          <Card.Text>
            Created a simple Twitter bot that will obtain the top upvoted post
            in a subreddit (LifeProTips) and tweet it out. Utilizes Tweepy API
            and reddit PRAW API.
          </Card.Text>
          <Button
            href="https://github.com/hrrsnsu/LPTbot" 
            variant="secondary"
            target="_blank"
          >
            Github
          </Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last Updated 13 days ago</small>
        </Card.Footer>
      </Card>
      <Card bsPrefix="card" border="secondary">
        <Card.Body>
          <Card.Title>Console CSGO</Card.Title>
          <Card.Text>
            Created a console version of CSGO for final project of a class. Has
            movement control, shooting, and round/bomb timers!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 1 year ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default ProjectCards;
