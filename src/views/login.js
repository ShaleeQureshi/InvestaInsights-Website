import React from "react";
import { Button, Form } from "react-bootstrap";
import { Footer } from "../components";
import firebase_functions from "../scripts/firebase/firebase_functions";
import { useNavigate } from "react-router-dom";

const Login_Page = () => {
  const navigate = useNavigate();
  const login_ = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    var login_success = await firebase_functions.login_user(email, password);
    if (login_success) {
      navigate("/member-resources");
    } else {
      alert("Login Unsuccessful");
    }
  };
  return (
    <div>
      <div className="wrapper">
        <div className="center">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              login_();
            }}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                id="email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                id="password"
                required
              />
            </Form.Group>
            <Button variant="outline-dark" className="w-100" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login_Page;
