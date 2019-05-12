import React from "react";
import { Carousel } from "react-bootstrap";
import pic from '../img/feature/1.jpg';

export default () => (
  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={pic}
        alt="First slide"
      />
      <Carousel.Caption>
        <h4>Gym</h4>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={pic}
        alt="Third slide"
      />
      <Carousel.Caption>
        <h4>Pool</h4>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={pic}
        alt="Third slide"
      />
      <Carousel.Caption>
        <h4>Lobby</h4>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
