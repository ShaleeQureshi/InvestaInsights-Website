import React, { useState, useEffect } from "react";
import { Footer, InvestaNav, Jumbo } from "../components";
import { Col, Container, Row, Image } from "react-bootstrap";
import IMG1 from "../assets/images/events/img1.jpeg";
import IMG2 from "../assets/images/events/img2.jpeg";
import IMG3 from "../assets/images/events/img3.jpeg";
import WESTIN_HARBOUR from "../assets/images/events/westin.webp";

import GOLDMAN from "../assets/images/events/goldman-sachs-logo-png-transparent.png";
import WHITEHORSE from "../assets/images/events/download-5-7.png";
import CITI from "../assets/images/events/Citi.svg.png";
import SCOTIA from "../assets/images/events/scotiabank-logo-D2F1AF87B5-seeklogo.com.png";
import JP_MORGAN from "../assets/images/events/JP-Morgan-Chase-Emblem.png";
import BANK_OF_AMERICA from "../assets/images/events/Bank-of-America-Emblem.png";
import ONEX from "../assets/images/events/7BfUBn0qJmbgY4iXeDQX3IvCocQ1639740697003_200x200.png";
import CPP from "../assets/images/events/512x512_Logo.webp";

const images = [
  {
    src: IMG1,
    text: "2023 Stock Pitch Competition",
  },
  {
    src: IMG2,
    text: "Our FlagShip Event",
  },
  {
    src: IMG3,
    text: "At the Westin Harbour Castle",
  },
];

const Events_Page = () => {
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
    <div className="events-page">
      <div className="wrapper">
        <InvestaNav />
        <div className="image-event-overlay w-100">
          <Image src={images[currentIndex].src} className="image-event w-100" />
          <div className="event-overlay">
            <h1>{images[currentIndex].text}</h1>
          </div>
        </div>

        <Container>
          <h1 className="mt-5 text-center">FlagShip Event</h1>
          <Row className="row-data">
            <Col style={{ borderRight: "2px solid black" }}>
              <h3 className="text-center">2023 Stock Pitch Competition</h3>
              <h5 className="mt-3">Event Details</h5>
              <li>Location: Westin Harbour Castle, Toronto, ON</li>
              <li>When: November 25, 2023 - 11am-5pm</li>
              <h5 className="mt-3">The Format</h5>
              <ul>
                <li>Teams of 5</li>
                <li>
                  Each team prepares a 15 minute stock pitch followed by a 5
                  minute Q&A for a North American Equity above $1 billion market
                  cap
                  <ul>
                    <li>
                      This is the preliminary stage and will be held virtually
                    </li>
                  </ul>
                </li>
                <li>
                  Top 5 teams will advance to the in-person finals in Toronto
                </li>
              </ul>
              <h5>Judges arriving from</h5>
              <Row className="justify-content-around">
                <Image src={ONEX} className="img-judge" />
                <Image src={GOLDMAN} className="img-judge" />
                <Image src={SCOTIA} className="img-judge" />
                <Image src={CITI} className="img-judge" />
                <Image src={WHITEHORSE} className="img-judge" />
                <Image src={JP_MORGAN} className="img-judge" />
                <Image src={BANK_OF_AMERICA} className="img-judge" />
                <Image src={CPP} className="img-judge" />
              </Row>
            </Col>
            <Col>
              <h3 className="text-center">More Events Coming Soon</h3>
            </Col>
          </Row>
          <hr />
        </Container>
      </div>
      <Footer />
    </div>
  );
};
export default Events_Page;
