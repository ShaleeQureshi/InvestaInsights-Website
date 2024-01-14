import React from "react";
import { Col, Button } from "react-bootstrap";

const CustomBoxButton = (props) => {
  return (
    <Col lg={4} className={`list-items  text-center ${props.customclass}`}>
      <a href="" onClick={props.clickFunc} className="clickable-btn">
        <img
          src={props.srcfile}
          alt={props.srcalt}
          className={`${props.imgClass}`}
        />
        <h4 className={`din-light ${props.headerClass}`}>{props.header}</h4>
      </a>
    </Col>
  );
};
export default CustomBoxButton;
