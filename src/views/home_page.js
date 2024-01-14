import React, { useEffect, useState } from "react";
import {
  CustomBox,
  CustomBox_NoImg_Button,
  CustomBox_OnlyImg,
  Footer,
  InvestaNav,
  Jumbo,
} from "../components";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Modal,
  Image,
} from "react-bootstrap";

// Uni logos
import QUEENS from "../assets/uni_logos/QueensLogo_black.webp";
import WESTERN from "../assets/uni_logos/Western_University_Canada_logo_edited_pn.webp";
import MCGILL from "../assets/uni_logos/1200px-McGill_University_CoA_edited_edit.webp";
import UFT from "../assets/uni_logos/Utoronto_coa_edited_edited.webp";
import YORK from "../assets/uni_logos/York-Logo-Vertical_edited_edited.webp";
import LAURIER from "../assets/uni_logos/laurier.png";
import MAC from "../assets/uni_logos/mcmacster.png";
import UOU from "../assets/uni_logos/uo.png";
import UW from "../assets/uni_logos/waterloo_school_of_pharmacy_logo_vert_bk.webp";
import TMU from "../assets/uni_logos/tmu.png";
import UBC from "../assets/uni_logos/ubc-logo_edited.webp";

// Summer 2023 Placement logos
import MORGAN from "../assets/s_2023_placements/morgan-stanley_edited.webp";
import CG from "../assets/s_2023_placements/canaccord-genuity-group-inc-logo-vector.webp";
import CIBC from "../assets/s_2023_placements/cibc_edited.webp";
import BMO from "../assets/s_2023_placements/bmo_edited.webp";
import BANK_OF_AMERICA from "../assets/s_2023_placements/Bank-of-America-Logo-PNG-File.webp";
import RBC from "../assets/s_2023_placements/rbc-logo-preview_edited.webp";
import SCOTIABANK from "../assets/s_2023_placements/scotia_edited.webp";
import CAPITALONE from "../assets/s_2023_placements/Capital_One_logo_svg.webp";
import DELOITTE from "../assets/s_2023_placements/Deloitte_Logo.webp";
import KPMG from "../assets/s_2023_placements/kpmg_logo_edited.webp";
import TD from "../assets/s_2023_placements/td-bank-1-logo-png-transparent-1.webp";
import BROOKFIELD from "../assets/s_2023_placements/Brookfield_Asset_Management_logo_svg.webp";
import NATIONAL_BANK from "../assets/s_2023_placements/national_bank.webp";
import EMPIRE_LIFE from "../assets/s_2023_placements/1200px-Empire_Life_logo_svg.webp";
import BURGUNDY from "../assets/s_2023_placements/burgundy-asset-management_en_2x copy.webp";
import CPP from "../assets/s_2023_placements/Canada_Pension_Plan_Investment_Board_CPP_Investments_and_LOGOS_E.webp";
import MANULIFE from "../assets/s_2023_placements/manulife-logo-png-transparent_edited.webp";
import BAROMETER from "../assets/s_2023_placements/c14d2e1b-71e3-42fe-8b0c-8704175bf27b.webp";
import BARRANTAGH from "../assets/s_2023_placements/barrantagh-dark_edited_edited_edited.webp";
import BAY_STREET from "../assets/s_2023_placements/logo.webp";
import PIMCO from "../assets/s_2023_placements/pimco_BIG-2cb9dc8b.webp";
import OTPP from "../assets/s_2023_placements/otpp_edited.webp";
import NOVACAP from "../assets/s_2023_placements/Novacap_Management_Inc__Novacap_Announces_Final_Closing_of_Canad.webp";
import EVERCORE from "../assets/s_2023_placements/Evercore_logo.webp";
import MUFG from "../assets/s_2023_placements/download-2.webp";
import PARADIGM from "../assets/s_2023_placements/logo-paradigm-dark.webp";
import BCG from "../assets/s_2023_placements/download-3.webp";
import NOMURA from "../assets/s_2023_placements/nomura-logo_edited.webp";
import ORIGIN from "../assets/s_2023_placements/origin-merchant-sq.webp";
import PILLAR49 from "../assets/s_2023_placements/Pillar49-logo-colour.webp";
import TURTLE_CREEK from "../assets/s_2023_placements/download.webp";
import PSP from "../assets/s_2023_placements/download-4.webp";
import SEGAL_GCSE from "../assets/s_2023_placements/download-5.webp";
import ULYSSES from "../assets/s_2023_placements/public_2e25ec30-b2b2-42b4-9569-c5fd00ef7f20_image.webp";
import AGENTIS from "../assets/s_2023_placements/1567038128434-2.webp";

// Partnerships
import WALL_STREET_OASIS from "../assets/partnerships/wall_street_oasis.webp";
import FINANCE_INTERVIEW_COACH from "../assets/partnerships/financial_interview_coach.webp";
import BREAKING_INTO_WALL_STREET from "../assets/partnerships/breaking_into_wall_street.webp";
import INVRS from "../assets/partnerships/invrs.png";

// Testimonials
import SHELLY_QIAN from "../assets/images/testimonials/shelly_qian.jpeg";
import MICHAEL_DUNCAN from "../assets/images/testimonials/michael_duncan.jpeg";
import JACOB_LEVY from "../assets/images/testimonials/jacob_levy.jpeg";
import DINA_SAYED from "../assets/images/testimonials/dina_sayed.jpeg";

const Home_Page = () => {
  // Alummni Testimonials
  const alum_test = [
    {
      name: "Shelly Qian",
      job: "LionTree, Investment Banking Analyst",
      img: SHELLY_QIAN,
      chapter: "McGill University Chapter",
      bio: "“What initially drew me to Investa was the intercollegiate aspect of the club – I was eager to work with students across Canada and hoped that the diversity in our experiences could challenge and further develop my existing knowledge on financial markets. Investa Insights offered a unique opportunity to meet students across Canada with a shared interest in finance. Receiving meaningful feedback from peers alongside the analyses we do at Investa taught me valuation. If you want to learn from students in all areas of finance, I highly encourage you to apply to Investa! I learned a tremendous amount this year and built lasting friendships!”",
      linkedIn: "https://www.linkedin.com/in/shelly-qian-0638b6140/",
    },
    {
      name: "Michael Duncan",
      job: "Moelis, Investment Banking Analyst",
      img: MICHAEL_DUNCAN,
      chapter: "Wilfrid Laurier University Chapter",
      bio: "“I joined Investa Insights to meet new students interested in finance that was larger than just my on-campus and enjoyed the entrepreneurial experience of a rapidly growing club. Everyone in Investa Insights is extremely friendly and willing to help others out. Investa gave me the opportunity to research and talk about businesses in industries I had never covered before and to work with fellow students in learning to analyze investments and develop a broader professional skill set. I would highly recommend Investa to anyone interested in finance looking to build a network of like-minded peers across Canada.”",
      linkedIn: "https://www.linkedin.com/in/michael-duncan-a76564141/",
    },
    {
      name: "Jacob Levy",
      job: "RBC, Investment Banking Analyst",
      img: JACOB_LEVY,
      chapter: "Queen's University Chapter",
      bio: "“I joined Investa Insights to learn more about finance by working with talented students both at Queen’s and abroad. I have benefited from learning alongside inspiring students at Queen’s and other universities, while having an opportunity to do thorough research and teach others through the deliverables we create. I have also enjoyed taking part in the Q&A for various stock pitches, market research reports, and other deliverables after presentations. Groups do very thorough analysis and it is a great opportunity to ask questions and learn. My time on Investa Insights has been one of the highlights of my university career so far. For students that love collaboration and would like to pursue an interest in finance, I highly recommend you apply.”",
      linkedIn: "https://www.linkedin.com/in/jacoblevy-profile/",
    },
    {
      name: "Dina Sayed",
      job: "Goldman Sachs, Power Trading Analyst",
      img: DINA_SAYED,
      chapter: "University of British Columbia Chapter",
      bio: "“I joined Investa Insights to work alongside driven, like-minded students across Canada. Investa Insights was a great way to collaborate with students nationwide and gain new perspectives from a supportive and educational community. The best part of being on Investa Insights was presenting stock pitches, market research reports, and transaction analyses while learning how to make high-quality, industry-standard deliverables. Investa Insights is an amazing opportunity to expand your network, technical skills, and set you up for landing a great internship in finance. I’ve had a wonderful experience at Investa Insights and I’m sure you will too.”",
      linkedIn: "https://www.linkedin.com/in/dina-sayed/",
    },
  ];

  const [responsiveDisplay, setResponsiveDisplay] = useState(false);
  const [displayNoneClass, setDisplayNoneClass] = useState("d-none");
  const [hide, setHide] = useState("");

  // Modal
  const [show, setShow] = useState(false);
  const [modalName, setModalName] = useState();
  const [modalBio, setModalBio] = useState();
  const [modalImg, setModalImg] = useState();

  useEffect(() => {
    if (window.screen.width < 920) {
      setResponsiveDisplay(true);
    }
  }, [responsiveDisplay]);

  const displayTestimonial = (bio) => {
    if (bio.length > 80) {
      bio = bio.substring(0, 71);
    }
    bio += "...";
    return bio;
  };

  return (
    <div className="home-page">
      <div className="wrapper">
        <InvestaNav />
        <Jumbo
          elements={
            <div className="jumbo-home">
              <h1>Our History</h1>
              {responsiveDisplay ? (
                <p>
                  Investa Insights is a student-run investment club that targets
                  students interested in finance from leading North American
                  business schools.
                </p>
              ) : (
                <p>
                  Investa Insights is a student-run investment club that targets
                  talented students interested in finance from the leading North
                  American business schools. Investa Insights was founded by two
                  passionate and driven Queen’s University commerce students who
                  aspired to bridge the undergraduate North American finance
                  community. Today Investa Insights is one of the largest
                  intercollegiate investment clubs nation-wide, with 11 chapters
                  and over 100 members.
                </p>
              )}
              <h3>Caliber of Analysts</h3>
              <p>
                With a selective application process (6% acceptance rate) and
                eleven chapters across Canada, our analysts can pride themselves
                as being some of the top business students in the country. In
                2022, our analysts have secured positions at top banks and firms
                in North America
              </p>
            </div>
          }
        />
        <Container className="mt-3">
          <h3 className="mt-5">What We Do</h3>
          <Row className="justify-content-around">
            <CustomBox_NoImg_Button
              customclass="box-shadow-list-what-we-do mt-5"
              header="Stock Pitches"
              msg="Investa Insights manages a US and CAS portfolio and make alpha-generating investments"
              btnText="Let me see"
              btnLink="/stock-pitches"
            />
            <CustomBox_NoImg_Button
              customclass="box-shadow-list-what-we-do mt-5"
              header="Market Research Reports"
              msg="Investa Insights releases market research reports that drives deeper into key North American sectors"
              btnText="Let me see"
              btnLink="/market-research"
            />
            <CustomBox_NoImg_Button
              customclass="box-shadow-list-what-we-do mt-5"
              header="Transaction Analysis"
              msg="Investa Insights analyzes precedent transactions to gain insight on transaction rationale"
              btnText="Let me see"
              btnLink="/transactional-analysis"
            />
          </Row>
          <h3 className="mt-4">Our Chapters</h3>
          <Row className="justify-content-around">
            <CustomBox
              srcfile={QUEENS}
              header="Queens University"
              customclass="box-shadow-list list-items  mt-3"
            />
            <CustomBox
              srcfile={WESTERN}
              header="Western University"
              customclass="box-shadow-list list-items  mt-3"
            />
            <CustomBox
              srcfile={MCGILL}
              header="McGill University"
              customclass="box-shadow-list list-items  mt-3"
            />
            <CustomBox
              srcfile={UBC}
              header="University of British Columbia"
              customclass="box-shadow-list list-items  mt-3"
            />
            <CustomBox
              srcfile={UFT}
              header="University of Toronto"
              customclass="box-shadow-list list-items  mt-3"
            />
            <CustomBox
              srcfile={YORK}
              header="York University"
              customclass="box-shadow-list list-items  mt-3"
            />
            <CustomBox
              srcfile={LAURIER}
              header="Laurier University"
              customclass="box-shadow-list list-items  mt-3"
            />
            <CustomBox
              srcfile={MAC}
              header="McMaster University"
              customclass="box-shadow-list list-items  mt-3"
            />
            <CustomBox
              srcfile={UOU}
              header="University of Ottawa"
              customclass="box-shadow-list list-items  mt-3"
            />
            <CustomBox
              srcfile={UW}
              header="University of Waterloo"
              customclass="box-shadow-list list-items  mt-3"
            />
            <CustomBox
              srcfile={TMU}
              header="Toronto Metropolitan University"
              customclass="box-shadow-list list-items  mt-3"
            />
          </Row>
        </Container>
        <div className="placements">
          <Container>
            <h3 className="mt-5 mb-5">Select Summer 2023 Placements</h3>
            <Row className="justify-content-around">
              <CustomBox_OnlyImg
                srcfile={MORGAN}
                customclass={`box-shadow-list-placements text-center pt-5 mb-3`}
              />
              <CustomBox_OnlyImg
                srcfile={CG}
                customclass={`box-shadow-list-placements text-center pt-5 mb-3 `}
              />
              <Col
                lg={4}
                className={`box-shadow-list-placements text-center pt-5 mb-3`}>
                <img src={CIBC} alt="CIBC" className="cibc-td-rbc-mufg" />
              </Col>
              <CustomBox_OnlyImg
                srcfile={BMO}
                customclass={`box-shadow-list-placements text-center pt-5 mb-3`}
              />
              {displayNoneClass == "d-none" ? (
                <Button
                  className={`mt-3 ${hide} w-50`}
                  variant="outline-light"
                  onClick={(e) => {
                    e.preventDefault();
                    setDisplayNoneClass("");
                    setHide("d-none");
                  }}>
                  View More
                </Button>
              ) : null}
              <CustomBox_OnlyImg
                srcfile={BANK_OF_AMERICA}
                customclass={`box-shadow-list-placements text-center pt-5 mb-3 ${displayNoneClass}`}
              />
              <Col
                lg={4}
                className={`box-shadow-list-placements text-center pt-5 mb-3 ${displayNoneClass}`}>
                <img src={RBC} alt="RBC" className="cibc-td-rbc-mufg" />
              </Col>
              <CustomBox_OnlyImg
                srcfile={SCOTIABANK}
                customclass={`box-shadow-list-placements text-center pt-5 mb-3 ${displayNoneClass}`}
              />
              <CustomBox_OnlyImg
                srcfile={CAPITALONE}
                customclass={`box-shadow-list-placements text-center pt-5 mb-3 ${displayNoneClass}`}
              />
              <CustomBox_OnlyImg
                srcfile={DELOITTE}
                customclass={`box-shadow-list-placements text-center pt-5 mb-3 ${displayNoneClass}`}
              />
              <CustomBox_OnlyImg
                srcfile={KPMG}
                customclass={`box-shadow-list-placements text-center pt-5 mb-3 ${displayNoneClass}`}
              />
              <Col
                lg={4}
                className={`box-shadow-list-placements text-center pt-5 mb-3 ${displayNoneClass}`}>
                <img src={TD} alt="TD" className="cibc-td-rbc-mufg" />
              </Col>
              <CustomBox_OnlyImg
                srcfile={BROOKFIELD}
                customclass={`box-shadow-list-placements text-center pt-5 mb-3 ${displayNoneClass}`}
              />
              <CustomBox_OnlyImg
                srcfile={NATIONAL_BANK}
                customclass={`box-shadow-list-placements text-center pt-5 mb-3 ${displayNoneClass}`}
              />
              <CustomBox_OnlyImg
                srcfile={EMPIRE_LIFE}
                customclass={`box-shadow-list-placements text-center pt-5 mb-3 ${displayNoneClass}`}
              />
              <CustomBox_OnlyImg
                srcfile={BURGUNDY}
                customclass={`box-shadow-list-placements text-center pt-5 mb-3 ${displayNoneClass}`}
              />
              <CustomBox_OnlyImg
                srcfile={CPP}
                customclass={`box-shadow-list-placements text-center pt-5 mb-3 ${displayNoneClass}`}
              />
              <CustomBox_OnlyImg
                srcfile={MANULIFE}
                customclass={`box-shadow-list-placements text-center pt-5 mb-3 ${displayNoneClass}`}
              />
              <CustomBox_OnlyImg
                srcfile={BAROMETER}
                customclass={`box-shadow-list-placements text-center pt-5 mb-3 ${displayNoneClass}`}
              />
              <CustomBox_OnlyImg
                srcfile={BARRANTAGH}
                customclass={`box-shadow-list-placements text-center pt-5 mb-3 ${displayNoneClass}`}
              />
              <CustomBox_OnlyImg
                srcfile={BAY_STREET}
                customclass={`box-shadow-list-placements text-center pt-5 mb-3 ${displayNoneClass}`}
              />
              <CustomBox_OnlyImg
                srcfile={PIMCO}
                customclass={`box-shadow-list-placements text-center pt-5 mb-3 ${displayNoneClass}`}
              />
              <CustomBox_OnlyImg
                srcfile={OTPP}
                customclass={`box-shadow-list-placements text-center pt-5 mb-3 ${displayNoneClass}`}
              />
              <CustomBox_OnlyImg
                srcfile={NOVACAP}
                customclass={`box-shadow-list-placements text-center pt-5 mb-3 ${displayNoneClass}`}
              />
              <CustomBox_OnlyImg
                srcfile={EVERCORE}
                customclass={`box-shadow-list-placements text-center pt-5 mb-3 ${displayNoneClass}`}
              />
              <Col
                lg={4}
                className={`box-shadow-list-placements text-center pt-5 mb-3 ${displayNoneClass}`}>
                <img src={MUFG} alt="MUFG" className="cibc-td-rbc-mufg" />
              </Col>
              <CustomBox_OnlyImg
                srcfile={PARADIGM}
                customclass={`box-shadow-list-placements text-center pt-5 mb-3 ${displayNoneClass}`}
              />
              <CustomBox_OnlyImg
                srcfile={BCG}
                customclass={`box-shadow-list-placements text-center pt-5 mb-3 ${displayNoneClass}`}
              />
              <CustomBox_OnlyImg
                srcfile={NOMURA}
                customclass={`box-shadow-list-placements text-center pt-5 mb-3 ${displayNoneClass}`}
              />
              <CustomBox_OnlyImg
                srcfile={ORIGIN}
                customclass={`box-shadow-list-placements text-center pt-5 mb-3 ${displayNoneClass}`}
              />
              <CustomBox_OnlyImg
                srcfile={PILLAR49}
                customclass={`box-shadow-list-placements text-center pt-5 mb-3 ${displayNoneClass}`}
              />
              <CustomBox_OnlyImg
                srcfile={TURTLE_CREEK}
                customclass={`box-shadow-list-placements text-center pt-5 mb-3 ${displayNoneClass}`}
              />
              <CustomBox_OnlyImg
                srcfile={PSP}
                customclass={`box-shadow-list-placements text-center pt-5 mb-3 ${displayNoneClass}`}
              />
              <CustomBox_OnlyImg
                srcfile={SEGAL_GCSE}
                customclass={`box-shadow-list-placements text-center pt-5 mb-3 ${displayNoneClass}`}
              />
              <CustomBox_OnlyImg
                srcfile={ULYSSES}
                customclass={`box-shadow-list-placements text-center pt-5 mb-3 ${displayNoneClass}`}
              />
              <CustomBox_OnlyImg
                srcfile={AGENTIS}
                customclass={`box-shadow-list-placements text-center pt-5 mb-3 ${displayNoneClass}`}
              />
            </Row>
          </Container>
        </div>
        <div className="partnerships">
          <Container>
            <h3 className="mt-5">Our Partnerships</h3>
            <Row className="justify-content-around">
              <CustomBox
                srcfile={WALL_STREET_OASIS}
                header="WALL STREET OASIS"
                customclass="box-shadow-list-partnerships mt-3 w-50"
              />
              <CustomBox
                srcfile={FINANCE_INTERVIEW_COACH}
                header="FINANCE INTERVIEW COACH"
                customclass="box-shadow-list-partnerships mt-3 w-50"
              />
              <CustomBox
                srcfile={BREAKING_INTO_WALL_STREET}
                header="BREAKING INTO WALL STREET"
                customclass="box-shadow-list-partnerships mt-3 w-50"
              />
              <CustomBox
                srcfile={INVRS}
                header="INVRS"
                customclass="box-shadow-list-partnerships mt-3 w-50"
                cusotmclassHeader="mt-5"
              />
            </Row>
          </Container>
        </div>
      </div>
      <div className="alumni-testimonials">
        <Container>
          <h3 className="mt-5">Alumni Testimonials</h3>
          <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            size="lg"
            aria-labelledby="example-custom-modal-styling-title">
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                {modalName}'s Full Biography
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <Image
                roundedCircle
                src={modalImg}
                className="mt-3 mb-3"
                style={{ width: "150px" }}
              />
              <p>{modalBio}</p>
              <Button
                className="w-100"
                variant="dark"
                onClick={(e) => {
                  e.preventDefault();
                  setShow(false);
                }}>
                Close
              </Button>
            </Modal.Body>
          </Modal>
          <Row className="justify-content-around">
            {alum_test.map((alum, index) => {
              return (
                <Card
                  key={index}
                  bg="light"
                  text="dark"
                  style={{ width: "21.4rem" }}
                  className="mb-2">
                  <Card.Header>{alum.chapter}</Card.Header>
                  <Card.Body className="text-center">
                    <Card.Title>{alum.name}</Card.Title>
                    <Card.Img
                      src={alum.img}
                      style={{ height: "10rem", width: "10rem" }}
                    />
                    <Card.Text>{displayTestimonial(alum.bio)}</Card.Text>
                    <Button
                      variant="outline-dark"
                      className="w-75"
                      onClick={() => {
                        setShow(true);
                        setModalName(alum.name);
                        setModalBio(alum.bio);
                        setModalImg(alum.img);
                      }}>
                      Read More
                    </Button>
                    <Button
                      variant="outline-dark"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-75 mt-1"
                      href={alum.linkedIn}>
                      LinkedIn
                    </Button>
                  </Card.Body>
                  <Card.Footer>{alum.job}</Card.Footer>
                </Card>
              );
            })}
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Home_Page;
