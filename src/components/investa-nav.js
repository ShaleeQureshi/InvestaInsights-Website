import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import INVESTA_LOGO from "../assets/icons/investalogo.webp";
import React, { useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "@firebase/auth";
import { auth } from "../scripts/firebase/config";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../scripts/auth-context";

const InvestaNav = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const redir = () => {
    navigate("/member-login");
  };

  return (
    <div className="investa-nav">
      <div className="inwards">
        <Navbar expand="lg" variant="dark" bg="transparent">
          <Navbar.Brand href="/">
            <img
              alt="Investa Insights"
              src={INVESTA_LOGO}
              width="100"
              height="50"
              className=""
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/portfolio">Our Portfolio</Nav.Link>
              <Nav.Link href="/team">Team</Nav.Link>
              <Nav.Link href="/events">Events</Nav.Link>
              <Nav.Link href="/sponsor">Sponsors</Nav.Link>
              <Nav.Link href="/stock-pitches">Stock Pitches</Nav.Link>
              <Nav.Link href="/market-research">Market Research</Nav.Link>
              <Nav.Link href="/transactional-analysis">
                Transaction Analysis
              </Nav.Link>
              <Nav.Link href="/member-resources">Member Resources</Nav.Link>

              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
            </Nav>
            <Nav>
              {currentUser ? (
                <Nav.Link
                  onClick={() => {
                    signOut(auth);
                    navigate("/member-login");
                    window.location.reload();
                  }}>
                  Sign Out
                </Nav.Link>
              ) : (
                <Nav.Link onClick={redir}>Sign In</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default InvestaNav;
