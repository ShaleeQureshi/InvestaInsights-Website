import React, { useState } from "react";
import {
  CustomBoxClickable,
  CustomBox_NoImg_Button,
  Footer,
  InvestaNav,
  Jumbo,
} from "../components";
import FileTable from "../components/filetable";
import { Container, Image, Card, Row, Col, Modal } from "react-bootstrap";

import IMG1 from "../assets/member_resources_images/img1.jpeg";
import IMG2 from "../assets/member_resources_images/img2.webp";
import IMG3 from "../assets/member_resources_images/img3.jpeg";
import IMG4 from "../assets/member_resources_images/img4.jpeg";

import RESOURCES from "../assets/member_resources_images/library_1.svg";
import INTERVIEW from "../assets/member_resources_images/interview_1.png";
import PRIMERS from "../assets/member_resources_images/primers_1.png";
import PITCH from "../assets/member_resources_images/deck_1.png";

const Member_Resources_Pages = () => {
  const resourceCards = [
    {
      img: INTERVIEW,
      cardTitle: "Interview Prep Materials",
      listRef: "/Interview Prep Materials",
    },
    {
      img: RESOURCES,
      cardTitle: "Investa Library",
      listRef: "/Investa Library",
    },
    {
      img: PRIMERS,
      cardTitle: "Investa Primers",
      listRef: "/Investa Primers",
    },
    {
      img: PITCH,
      cardTitle: "Pitch Decks",
      listRef: "/Pitch Decks",
    },
  ];
  const [show, setShow] = useState(false);
  const [resourceType, setResourceType] = useState(null);
  const [listRef, setListRef] = useState(null);

  return (
    <div className="member-resources-page">
      <InvestaNav />
      <div className="wrapper">
        <Jumbo
          elements={
            <div className="mrp-jumbo pb-3">
              <h1>Member Resources</h1>
              <p>
                These resources are meant for members of Investa Insights -{" "}
                <span id="span">do not</span> share them outside of Investa
                Insights
              </p>
            </div>
          }
        />
        <Container className="mt-5">
          <Row className="justify-content-around text-center">
            <Col
              lg={4}
              className="box-shadow-list-teams-banners-resources mt-3 teams-banners clickable-box-resources">
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setShow(true);
                  setResourceType("Interview Prep Materials");
                  setListRef("/Interview Prep Materials");
                }}
                className="clickable-btn">
                <h4 className="din-light">Interview Prep Materials</h4>
              </a>
            </Col>
            <Col
              lg={4}
              className="box-shadow-list-teams-banners-resources mt-3 teams-banners clickable-box-resources">
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setShow(true);
                  setResourceType("Investa Library");
                  setListRef("/Investa Library");
                }}
                className="clickable-btn">
                <h4 className="din-light">Investa Library</h4>
              </a>
            </Col>
            <Col
              lg={4}
              className="box-shadow-list-teams-banners-resources mt-3 teams-banners clickable-box-resources">
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setShow(true);
                  setResourceType("Investa Primers");
                  setListRef("/Investa Primers");
                }}
                className="clickable-btn">
                <h4 className="din-light">Investa Primers</h4>
              </a>
            </Col>
            <Col
              lg={4}
              className="box-shadow-list-teams-banners-resources mt-3 teams-banners clickable-box-resources">
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setShow(true);
                  setResourceType("Pitch Decks");
                  setListRef("/Pitch Decks");
                }}
                className="clickable-btn">
                <h4 className="din-light">Pitch Decks</h4>
              </a>
            </Col>

            {/* {resourceCards.map((card, index) => {
              return (
                // <Col className="mt-2 mb-2 resources-wrap" key={index}>
                //   <a
                //     href=""
                // onClick={(e) => {
                //   e.preventDefault();
                //   setShow(true);
                //   setResourceType(card.cardTitle);
                //   setListRef(card.listRef);
                // }}>
                //     <Card className="bg-dark text-white resources-card">
                //       <Card.Img src={card.img} alt="Card image" />
                //       <Card.ImgOverlay>
                //         <Card.Title style={{ fontFamily: "Din-Regular" }}>
                //           {card.cardTitle}
                //         </Card.Title>
                //       </Card.ImgOverlay>
                //     </Card>
                //   </a>
                // </Col>
                <CustomBox_NoImg_Button
                  customclass="box-shadow-list-teams-banners-resources mt-3 teams-banners clickable-box-resources"
                  clickFunc={(e) => {
                    e.preventDefault();
                    setShow(true);
                    setResourceType(card.cardTitle);
                    setListRef(card.listRef);
                  }}
                  header={card.cardTitle}
                  imgClass="investa-resources-img"
                />
              );
            })} */}
          </Row>
          <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            size="lg"
            aria-labelledby="example-custom-modal-styling-title">
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                {resourceType}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FileTable listRef={listRef} />
            </Modal.Body>
          </Modal>
          {/* <h3 className="mt-4 mb-4">
            The file structure of our resources can be found below
          </h3>
          <FileTable /> */}
        </Container>
      </div>
      <Footer />
    </div>
  );
};
export default Member_Resources_Pages;
