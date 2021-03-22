import React from "react";
import { CardDeck, Card, Button, CardGroup } from "react-bootstrap";
import ReactPlayer from "react-player/youtube";

function Interest() {
  return (
    <div className="videoCard">
      <Card bsPrefix="card" border="secondary">
        <Card.Body>
          <Card.Title>Gaming Videos!</Card.Title>
          <Card.Text>
            In my free time, I enjoy playing and recording video game clips to
            make little compilations with music I like.
          </Card.Text>
          <div className='player-wrapper'>
            <ReactPlayer className='react-player'
              controls="true"
              width='100%'
              height='100%'
              url="https://www.youtube.com/watch?v=4JPgkCuB6ZE&list=UUzC8vViBCXSb0w9RdQ_qNnQ"
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Interest;
