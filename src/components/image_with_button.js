import React from "react";
import { Button, Image } from "react-bootstrap";

const ImageWithButton = (props) => {
  return (
    <div className="img-with-button text-center mt-5">
      <Image src={props.src} />
      <Button
        variant="outline-dark"
        className="w-50 mt-3 mb-3"
        href={props.btnLink}
        target="_blank"
        rel="noopener noreferrer">
        {props.btnText}
      </Button>
    </div>
  );
};

export default ImageWithButton;
