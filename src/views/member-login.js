import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Footer, InvestaNav, Jumbo } from "../components";
import firebase_functions from "../scripts/firebase/firebase_functions";
import { useNavigate } from "react-router-dom";
import { setPersistence, browserSessionPersistence } from "@firebase/auth";
import { auth } from "../scripts/firebase/config";

const Member_Login_Page = () => {
  const navigate = useNavigate();
  const login_ = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    var login_success = await firebase_functions.login_user(email, password);
    if (login_success) {
      setPersistence(auth, browserSessionPersistence).then(() => {
        navigate("/member-resources");
      });
    } else {
      alert("Login Unsuccessful");
    }
  };
  return (
    <div>
      <div className="wrapper">
        <InvestaNav />
        <Jumbo
          elements={
            <div className="jumbo-login">
              <h1>Member Login</h1>
              <p>Members get exclusive access to our resources!</p>
            </div>
          }
        />
        <Container className="mt-5 pt-5 w-50">
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
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Member_Login_Page;
