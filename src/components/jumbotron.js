import React from "react";
import { Container } from "react-bootstrap";

const Jumbo = (props) => {
  return (
    <div className="jumbo">
      <div id="jumbo-container" className="pt-5">
        {props.elements}
      </div>
    </div>
  );
};
export default Jumbo;
