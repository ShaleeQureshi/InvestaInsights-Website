import React, { useEffect, useState } from "react";
import { Footer } from "../components";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login_Error_Page = () => {
  const navigate = useNavigate();
  const redir = () => {
    navigate("/member-login");
  };

  return (
    <div>
      <div className="wrapper">
        <div className="center">
          <h3>An unexpected error has occured - please login again</h3>
          <Button variant="outline-dark" className="w-100" onClick={redir}>
            Login
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Login_Error_Page;
