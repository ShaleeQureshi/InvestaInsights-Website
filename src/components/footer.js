import React from "react";
import { Container } from "react-bootstrap";

// Importing images for footer
import LINKEDIN from "../assets/icons/linkedin_logo.png";
import EMAIL from "../assets/icons/email_logo_rsz.png";
import INSTAGRAM from "../assets/icons/instagram_logo.png";
import FACEBOOK from "../assets/icons/facebook_logo_rsz.png";

const Footer = () => {
  const p_text =
    "Investa Insights is the fastest-growing North American intercollegiate investment club with chapters at leading North American business schools. Investa Insights publishes stock pitches, market research reports, and transaction analysis while managing a US and Canadian portfolio.";
  return (
    <div>
      <Container fluid className="text-center footer">
        <div className="pt-5 pb-3 icons">
          <a
            href="mailto:investainsights@gmail.com"
            target="_blank"
            rel="noopener noreferrer">
            <img src={EMAIL} alt="Email" />
          </a>
          <a
            href="https://www.linkedin.com/company/investainsights/"
            target="_blank"
            rel="noopener noreferrer">
            <img src={LINKEDIN} alt="LinkedIn" />
          </a>
          <a
            href="https://www.instagram.com/investa.insights/?hl=en"
            target="_blank"
            rel="noopener noreferrer">
            <img src={INSTAGRAM} alt="Instagram" />
          </a>
        </div>
        <Container className="pb-3">
          <p>{p_text}</p>
        </Container>
        <hr id="shahrukh-signature-underline" className="mb-3 mt-3" />
        <div className="pb-3 text-center">
          <a
            className="mt-3 shahrukh-signature"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/qureshishahrukh/">
            © Shahrukh Qureshi
          </a>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
