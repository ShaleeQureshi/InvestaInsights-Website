import React from "react";
import { Col } from "react-bootstrap";

const CustomBox = (props) => {
  return (
    <Col lg={4} className={`list-items  text-center ${props.customclass}`}>
      <img src={props.srcfile} alt={props.srcalt} />
      <h4 className={`din-light ${props.cusotmclassHeader}`}>{props.header}</h4>
    </Col>
  );
};
export default CustomBox;
