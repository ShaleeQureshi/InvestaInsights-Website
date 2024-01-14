import React from "react";
import { Col } from "react-bootstrap";

const CustomBox_OnlyImg = (props) => {
  return (
    <Col lg={4} className={`${props.customclass}`}>
      <img src={props.srcfile} alt={props.srcalt} />
    </Col>
  );
};
export default CustomBox_OnlyImg;
