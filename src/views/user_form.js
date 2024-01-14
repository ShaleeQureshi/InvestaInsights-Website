import React from "react";
import { Button, Form } from "react-bootstrap";
import { auth } from "../scripts/firebase/config";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { database } from "../scripts/firebase/config";
import { ref, set } from "firebase/database";

const User_Form = () => {
  const submit_user = async () => {
    const first = document.getElementById("first").value;
    const last = document.getElementById("second").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const userCred = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    set(ref(database, "/normal-users/" + userCred.user["uid"] + "/"), {
      email: email,
      first_name: first,
      last_name: last,
    })
      .then(() => {
        alert(
          "Thank you! You can now login to the member resources section on the Investa site"
        );
      })
      .catch((err) => {
        alert("An unexpected error has occured\n" + err);
      });
  };

  return (
    <div className="center">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          submit_user();
        }}>
        <Form.Label>First Name</Form.Label>
        <Form.Control placeholder="Enter first name" id="first" required />
        <Form.Label className="mt-2">Last Name</Form.Label>
        <Form.Control placeholder="Enter last name" id="second" required />
        <Form.Label className="mt-2">Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          id="email"
          required
        />
        <Form.Label className="mt-2">Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          id="password"
          required
        />
        <Button type="submit" className="w-100 mt-3" variant="outline-dark">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default User_Form;
