import React, { useState, useEffect } from "react";
import { Footer, InvestaNav, Jumbo, Custom_Carousel } from "../components";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import IMG1 from "../assets/images/our portfolio/img1.jpeg";
import IMG2 from "../assets/images/our portfolio/img2.webp";
import IMG3 from "../assets/images/our portfolio/img3.jpeg";

const images = [
  {
    src: IMG1,
    text: "Coming Soon",
  },
  {
    src: IMG2,
    text: "Coming Soon",
  },
  {
    src: IMG3,
    text: "Coming Soon",
  },
];
const Our_Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex == images.length - 1) {
        setCurrentIndex(0);
      } else {
        var curIndex = currentIndex;
        curIndex += 1;
        setCurrentIndex(curIndex);
      }
    }, 6000);
  });
  return (
    <div className="portfolio-page">
      <div className="wrapper">
        <InvestaNav />
        <div className="image-stocks-overlay w-100">
          <Image src={images[currentIndex].src} className="image-port w-100" />
          <div className="stock-overlay">
            <h1>{images[currentIndex].text}</h1>
          </div>
        </div>
        <Container>
          <h1>Cool graph goes here</h1>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
export default Our_Portfolio;
