import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../FounderSlider/FounderSlider.css';
import imran from '../images/imran.jpg';
import shanzey from '../images/shanzey.jpg';

function FounderSlider() {
  return (
    <div>
      
      <Carousel className='Carousel-Founders-Cards'>
      <Carousel.Item>
      <CardGroup>
      <Card>
        <Card.Img variant="top" src={imran} />
        <Card.Body>
          <Card.Title> <h3 className='cardsname'>IMRAN SALEEM</h3> </Card.Title>
          <Card.Text>
            CEO & DEVELOPER - IDEAX Website & Android Application
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={imran} />
        <Card.Body>
          <Card.Title><h3 className='cardsname'>SHANZEY FAYYAZ</h3></Card.Title>
          <Card.Text>
            CORE TEAM LEAD & UI/UX DESIGNER - IDEAX WEBSITE & ANDROID APPPLICATION{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={imran} />
        <Card.Body>
          <Card.Title><h3 className='cardsname'>FATIMA TARIQ</h3></Card.Title>
          <Card.Text>
            Managing Director & FYP Coordinator - IDEAX Website & Application
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
      </Carousel.Item>
      <Carousel.Item>
      <CardGroup>
      <Card>
        <Card.Img variant="top" src={imran}  />
        <Card.Body>
          <Card.Title>BILAL BUTT</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={imran}  />
        <Card.Body>
          <Card.Title>USMAN SALEEM</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={imran}  />
        <Card.Body>
          <Card.Title>HAMZA SALEEM</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
      </Carousel.Item>
      <Carousel.Item>
      <CardGroup>
      <Card>
        <Card.Img variant="top" src={imran} />
        <Card.Body>
          <Card.Title>SYSTEM ANALYSTS</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={imran}  />
        <Card.Body>
          <Card.Title>BACK END DEVELOPER</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={imran}  />
        <Card.Body>
          <Card.Title>CORE SE ENGINEER</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
      </Carousel.Item>
     
    </Carousel>
    </div>
  )
}

export default FounderSlider;
