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
              <p>Placeholder</p>
          </Container>
        </>
    )

}

export default About;