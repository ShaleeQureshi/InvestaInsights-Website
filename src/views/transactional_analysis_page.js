import React, { useState } from "react";
import {
  Footer,
  InvestaNav,
  Jumbo,
  Custom_Carousel,
  ImageWithButton,
} from "../components";
import { Row, Col, Container, Image, Button } from "react-bootstrap";

import HEADER from "../assets/images/transaction_analysis/morgan_header.jpeg";

// PDFs
import BROOKFIELD from "../assets/transactional_analysis/Investa-Insights-Transaction-Analysis-UBC.pdf";
import MORGAN_STANLEY from "../assets/transactional_analysis/MS-E_Trade.pdf";

import BROOKFIELD_IMAGE from "../assets/images/transaction_analysis/brookfield.png";
import MORGAN_IMAGE from "../assets/images/transaction_analysis/morgan.png";

const Transactional_Analysis_Page = () => {
  return (
    <div className="transactional-page">
      <div className="wrapper">
        <InvestaNav />
        <div className="image-stocks-overlay w-100">
          <Image src={HEADER} className="image-stocks w-100" />
          <div className="stock-overlay">
            <h1>
              Brookfield Renewable Partners Acquires Controlling Stake in
              TerraForm Power
            </h1>
            <Button
              href={BROOKFIELD}
              className="text-center w-100"
              variant="outline-light"
              target="_blank"
              rel="noopener noreferrer">
              View Now
            </Button>
          </div>
        </div>
        <Container className="body mt-5">
          <Row>
            <Col>
              <ImageWithButton
                src={MORGAN_IMAGE}
                btnText="Morgan Stanley & E*Trade"
                btnLink={MORGAN_STANLEY}
              />
            </Col>
            <Col>
              <ImageWithButton
                src={BROOKFIELD_IMAGE}
                btnText="Brookfield Renewable Partners..."
                btnLink={BROOKFIELD}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
export default Transactional_Analysis_Page;
