import React from "react";
import { Carousel } from "react-bootstrap";

const Custom_Carousel = (props) => {
  return (
    <Carousel className="carousel w-100">
      <Carousel.Item>
        <img src={props.img1} alt="img1" id="img1" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={props.img2} alt="img2" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={props.img3} alt="img3" />
      </Carousel.Item>
    </Carousel>
  );
};
export default Custom_Carousel;
