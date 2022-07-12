import React from 'react';

import {
  Jumbotron,
  Container,
  CardColumns,
  Card
} from 'react-bootstrap';

const About = () => {

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>About Us:</h1>
        </Container>
      </Jumbotron>
      <Container>
        <p> DubCity VR Tournaments is a new and growing community specializing in VR First Person Shooters. Established in 2022, we are a community driven platform - Run by the players, for the the players!
          Currently we have over 500 members and are growing everyday.
        </p>
        <p>
          <strong>What we do:</strong><br/><br/>

          Along with providing a medium for VR FPS enthusiatst to meet, talk, and breathe in a non-toxic environment, we also host a multitude of tournaments based around healthy competition.
          Currently we are hosting competitions for the following games: <br></br>
          1. Onward
          <br></br>
          2. Contractors
          <br></br>
          3. Pavlov
          <br></br>
          4. More to come ...
        </p>
        <p>
          <strong>Our aim:</strong><br/><br/>

          We aim to establish ourselves as the #1 Brand for gaming events and tournaments. Also, we aim to grow larger in members to create a a healthy environment for players young and old.
          Finally, we aim to publicize our efforts through live broadcasting of our events and tournaments.

          How that benefits you:

          We are looking for sponsorship from companies we can stand behind. Given are members and desire to grow: We intend to promote ourselves and our sponsors through marketing
          strategies implemented in ourcommunity servers and social media platform.
        </p>
      </Container>
    </>
  )

}

export default About;