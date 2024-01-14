import React from "react";
import { Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CustomBox_NoImg_Button = (props) => {
  const navigate = useNavigate();
  return (
    <Col lg={4} className={` text-center ${props.customclass}`}>
      <h4 className="din-light">{props.header}</h4>
      <p className="din-light">{props.msg}</p>
      <Button
        variant="outline-dark"
        onClick={() => {
          navigate(`${props.btnLink}`);
        }}>
        {props.btnText}
      </Button>
    </Col>
  );
};
export default CustomBox_NoImg_Button;
