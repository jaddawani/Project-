import React from "react";
import {Card} from "react-bootstrap"
import {Button , Placeholder } from 'react-bootstrap'
// import Carousel from "react-material-ui-carousel";

import Carousel from "react-bootstrap/Carousel";
const ImgSlider = () => {
  return (
    <>
    <div>
      <Carousel fade>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="http://coastal.zimbali.co.za/wp-content/uploads/sites/3/2017/11/imgs_11.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/OIF.lkQoOltaPvNRwm1bSgqpwA?pid=ImgDet&rs=1"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://coastal.zimbali.co.za/wp-content/uploads/sites/3/2017/11/imgs_11.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>

 <br>
 </br>
 <br>
 </br>

<div className="d-flex justify-content-around">
  <Card style={{ width: '36rem' }}>
    <Card.Img variant="top" src="https://media.discordapp.net/attachments/847780444954296320/880729396426711060/memorable.PNG" />
    <Card.Body>
      <Card.Title>Kalb</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  

  {/* <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://media.discordapp.net/attachments/847780444954296320/880729396426711060/memorable.PNG" />
    <Card.Body>
      <Placeholder as={Card.Title} animation="glow">
        <Placeholder xs={6} />
      </Placeholder>
      <Placeholder as={Card.Text} animation="glow">
        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
        <Placeholder xs={6} /> <Placeholder xs={8} />
      </Placeholder>
      <Placeholder.Button variant="primary" xs={6} />
    </Card.Body>
  </Card> */}
</div>
</>
  );
};

export default ImgSlider;
