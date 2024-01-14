import React, { useState } from "react";
import { Footer, InvestaNav, Jumbo } from "../components";
import { Button, Container, Form, Image, Row, Modal } from "react-bootstrap";

// Sponsor images
import COOPERATORS from "../assets/sponsor_page/Cooperators-logo-blue-2X.png";
import AVISOWEALTH from "../assets/sponsor_page/avisowealth.png";
import OTPP from "../assets/sponsor_page/OTPP.png";
import REPORT from "../assets/sponsor_page/Investa-Corporate-Package (1).pdf";

import { database } from "../scripts/firebase/config";
import { ref, set } from "firebase/database";

const Sponsor_Page = () => {
  const submit_request = () => {
    const email = document.getElementById("email").value;
    const name = document.getElementById("f_name").value;
    const org_name = document.getElementById("org").value;
    const msg = document.getElementById("message").value;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + ":" + dd + ":" + yyyy;
    var todayObj = mm + "/" + dd + "/" + yyyy;

    set(ref(database, "/sponsors/" + org_name + "_" + today), {
      name: name,
      email: email,
      organization: org_name,
      message: msg,
      date: todayObj,
    })
      .then(() => {
        alert("Your request has been sent!");
      })
      .catch((err) => {
        alert(
          "An unexpected error has occured when processing your request\n" + err
        );
      });
  };

  const [show, setShow] = useState(false);

  return (
    <div className="sponsor-page">
      <div className="wrapper">
        <InvestaNav />
        <Jumbo
          elements={
            <div className="jumbo-sponsor">
              <h1>Sponsors</h1>
              <h3>Thank you to our sponsors for their endless support.</h3>
              <Button
                variant="outline-light"
                className="mb-3"
                onClick={(e) => {
                  e.preventDefault();
                  setShow(true);
                }}>
                Why Sponsor Us?
              </Button>
            </div>
          }
        />
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          size="lg"
          aria-labelledby="example-custom-modal-styling-title">
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Sponsoring Investa
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="joining-body">
            <h3>Sponsorship Opportunities</h3>
            <li>Company Logo</li>
            <p>
              Your firm will get increased exposure by having your logo
              displayed across our social media, website, signs at events, and
              on merchandise . Logo size will depend on sponsorship tier.
            </p>
            <li>Resume Book</li>
            <p>
              Your firm will receive a book containing the resume and contact
              information from all Investa members. The Finalists and Analysts
              will be indicated .
            </p>
            <li>Fireside Chat</li>
            <p>
              Representative(s) from your firm will be invited to promote your
              company in a 30 minute virtual fireside chat + Q&A which will be
              showcased to all 11 Investa chapters.
            </p>
            <li>Coffee Chat Session</li>
            <p>
              Connect with potential candidates through a 2-hour drop-in coffee
              chat sessions open to exclusively to Investa members.
            </p>
            <li>Virtual Workshop</li>
            <p>
              An opportunity to demonstrate your firm's commitment to education
              and talent development by hosting a virtual workshop to help
              candidates prepare for the stock pitch competition.
            </p>
            <h3>TITLE Sponsor Exclusive Opportunities</h3>
            <li>Winner Dinner</li>
            <p>
              With a 1:1 ratio of representatives to candidates, this is the
              perfect opportunity to build lasting relationships with the
              winning team of the stock pitch competition during dinner after
              the event.
            </p>
            <li>Closing Speech</li>
            <p>
              Leave off on a strong note by delivering a heartfelt closing
              speech. This is a chance to make any closing remarks and
              congratulate students on their achievements. Thus, your firm is
              able to demonstrate its commitment to the candidates.
            </p>
            <li>Awards Host</li>
            <p>
              Have your representatives host the awards ceremony to recognize
              the competitors who have gone above and beyond in their work. By
              making their night truly special, your firm will leave a lasting
              impression on candidates.
            </p>
            <li>Photo Booth</li>
            <p>
              A memorable event will be accompanied by cherished memories.
              Ensure that students remember the dedication of your firm by being
              present in their social media posts and photos. Customize the
              booth as you see fit to make it extra fun!
            </p>
            <li>Event Venue</li>
            <p>
              An opportunity to impress candidates with the prestige of working
              at your company by having the option of hosting the competition at
              your firm’s office. This is optional, the event will be hosted at
              Westin Harbour if declined.
            </p>
            <h3>Partnership Levels</h3>
            <li>
              {" "}
              <span style={{ backgroundColor: "yellow" }}>Title = $5,000</span>
            </li>
            <p>
              The most prestigious tier. There can only be one Title sponsor.
              The competition will be hosted in your firm’s name. Your firm will
              have the largest sized logos and will be invited to send five
              representatives to the event.
            </p>
            <li>
              <span style={{ backgroundColor: "yellow" }}>
                Platinum = $1,500
              </span>
            </li>
            <p>
              The Platinum sponsorship tier offers your firm Platinum Level
              sized logos. Your firm will also be invited to send three
              representatives to the event. Platinum sponsorships are a way to
              establish your firm as an industry leader in talent development.
            </p>
            <li>
              <span style={{ backgroundColor: "yellow" }}>
                Diamond = $1,000
              </span>
            </li>
            <p>
              The Diamond sponsorship tier offers your firm Diamond Level sized
              logos. Your firm will also be invited to send two representatives
              to the event. Diamond sponsorships allow for more personal
              communication with candidates.
            </p>
            <li>
              <span style={{ backgroundColor: "yellow" }}>Gold = $500</span>
            </li>
            <p>
              The Gold sponsorship tier offers your firm Gold Level sized logos.
              Your firm will also be invited to send one representative to the
              event. Gold sponsorships are a great way to increase brand
              exposure.
            </p>
            <Button
              className="w-100"
              variant="outline-dark"
              href={REPORT}
              target="_blank"
              rel="noopener noreferrer">
              Learn More
            </Button>
          </Modal.Body>
        </Modal>
        <Container>
          <h2 className="mt-5">Current Sponsors</h2>
          <hr />
          <Row className="justify-content-around">
            <Image src={OTPP} className="img-sponsors" />
            <Image src={AVISOWEALTH} className="img-sponsors" />
            <Image src={COOPERATORS} id="coop" />
          </Row>
          <hr className="mt-4" />
          <h2 className="mt-5">Become a Sponsor</h2>
          <Form
            className="mt-3"
            onSubmit={(e) => {
              e.preventDefault();
              submit_request();
            }}>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your full name"
              id="f_name"
              required
            />
            <Form.Label className="mt-2">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              id="email"
            />
            <Form.Label className="mt-2">Organization Name</Form.Label>
            <Form.Control
              placeholder="Enter the organization's name"
              required
              id="org"
            />
            <Form.Label className="mt-2">Message</Form.Label>
            <Form.Control as="textarea" rows={3} required id="message" />
            <Button className="mt-3 w-100" variant="outline-dark" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
export default Sponsor_Page;
