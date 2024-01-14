import React, { useEffect, useState } from "react";
import {
  ImageWithButton,
  Footer,
  InvestaNav,
  Jumbo,
  Custom_Carousel,
} from "../components";
import { Row, Col, Container, Image, Button } from "react-bootstrap";

import MEDIA_SECTOR from "../assets/images/market_research/media_header.jpeg";
import MERGERS from "../assets/images/market_research/mergers_header.jpeg";
import CANNABIS from "../assets/images/market_research/cannabis_image.avif";
import CANADIAN_POWER from "../assets/images/market_research/canadian_power_utilities.jpg";
import US_INFRA from "../assets/images/market_research/us_infrastructure_image.jpeg";

// Images

// 2022
import SPACE_IMG from "../assets/images/market_research/2022/space.png";
import BLOCKCHAIN_IMG from "../assets/images/market_research/2022/blockchain.png";
import CANADIAN_IMG from "../assets/images/market_research/2022/industry_pump.png";
import SPORT_ENT_IMG from "../assets/images/market_research/2022/sport_ent.png";
import CANADIAN_RES_IMG from "../assets/images/market_research/2022/home_alone.png";
import BIOTECH_IMG from "../assets/images/market_research/2022/biotech.png";
import AGTECH_IMG from "../assets/images/market_research/2022/agtech.png";
import BEVERAGES_IMG from "../assets/images/market_research/2022/beverages.png";
import US_VIDEO_GAME_IMG from "../assets/images/market_research/2022/us_videogame.png";
import GUIDE_TO_AI_IMG from "../assets/images/market_research/2022/ai.png";

// 2021
import CANNABIS_IMG from "../assets/images/market_research/2021/space_travel.png";
import SPAC_IMG from "../assets/images/market_research/2021/SPAC.png";
import SEMI_CONDUC_IMG from "../assets/images/market_research/2021/semiconductors.png";
import SPACE_TRAVEL_IMG from "../assets/images/market_research/2021/space_travel.png";

// 2020
import MEDIA_SECTOR__IMG from "../assets/images/market_research/2020/media_sector.png";
import MERGERS_ACQ_IMG from "../assets/images/market_research/2020/mergers.png";
import CANADIAN_CANNABIS_IMG from "../assets/images/market_research/2020/canadian_cannabis.png";
import US_HEALTH_CARE_IMG from "../assets/images/market_research/2020/us_healthcare.png";
import GLOBAL_ESPORTS_IMG from "../assets/images/market_research/2020/global_esports.png";
import CANADIAN_TELE_COM_IMG from "../assets/images/market_research/2020/canadian_tele.png";
import CASINO_IMG from "../assets/images/market_research/2020/casino.png";
import CANADIAN_RETAIL_IMG from "../assets/images/market_research/2020/retail.png";
import CANADIAN_METALS_IMG from "../assets/images/market_research/2020/canadian_metals.png";
import US_AIRLINE_IMG from "../assets/images/market_research/2020/us_airplane.png";
import CANADIAN_ENERGY_IMG from "../assets/images/market_research/2020/canadian_energy_report.png";
import TECH_IMG from "../assets/images/market_research/2020/tech.png";
import CANADIAN_FINANCIAL_IMG from "../assets/images/market_research/2020/canadian_financial_institutions.png";

// PDFs

// 2022
import SPACE from "../assets/market_research/2022/Space Exploration Industrt.pdf";
import BLOCKCHAIN from "../assets/market_research/2022/A Guide to Blockchain and Cryptocurrency.pdf";
import CANADIAN_PUMP from "../assets/market_research/2022/Canadian Energy Industry.pdf";
import SPORT_ENT from "../assets/market_research/2022/McGill US Market Research - vF.pdf";
import CANADIAN_RES from "../assets/market_research/2022/Investa-Insights-Canadian-Residential-Real-Estate-Laurier-Final-pdf.pdf";
import BIOTECH from "../assets/market_research/2022/Biotechnology Industry Report";
import AGTECH from "../assets/market_research/2022/AgTech-Investa-PP-2022.pdf";
import BEVERAGES from "../assets/market_research/2022/Beverages-Report-v.Website.pdf";
import US_VIDEO_GAME from "../assets/market_research/2022/York-US-Report-vf.pdf";
import GUIDE_TO_AI from "../assets/market_research/2022/Market-Research-Report-Artificial-Intelligence-Western-Chapter-vF (1).pdf";

// 2021
import CANNABIS_PDF from "../assets/market_research/2021/Investa-Insights-Canadian Cannabis-Waterloo.pdf";
import SPAC_PDF from "../assets/market_research/2021/Investa-Insights-SPAC-McGill.pdf";
import SEMI_CONDUC_PDF from "../assets/market_research/2021/Investa-Insights-US-Semiconductors-Waterloo.pdf";
import SPACE_TRAVEL_PDF from "../assets/market_research/2021/Investa-Insights-Space-Travel-UOttawa.pdf";

// 2020
import MEDIA_SECTOR_PDF from "../assets/market_research/2020/Media Report.pdf";
import MERGERS_ACQ_PDF from "../assets/market_research/2020/Mergers and Acquisittions.pdf";
import CANADIAN_CANNABIS_PDF from "../assets/market_research/2020/Canadian Cannabis Sector Report.pdf";
import US_HEALTH_CARE_PDF from "../assets/market_research/2020/US Healthcare Investor Guide.pdf";
import GLOBAL_ESPORTS_PDF from "../assets/market_research/2020/Global ESports.pdf";
import CANADIAN_TELE_PDF from "../assets/market_research/2020/Canadian Telecommunication Market Research Report.pdf";
import CASINO_PDF from "../assets/market_research/2020/US Casinos Report-3.pdf";
import CANADIAN_RETAIL_PDF from "../assets/market_research/2020/U.S. Retail Industry Report.pdf";
import CANADIAN_METALS_PDF from "../assets/market_research/2020/Canadian Metals & Mining Report_vF.pdf";
import US_AIRLINE_PDF from "../assets/market_research/2020/COVID-19's Impact on US Airlines - vF.pdf";
import CANADIAN_ENERGY_PDF from "../assets/market_research/2020/Canadian Energy Report - Investa Insights - CAD Portfolio.pdf";
import TECH_PDF from "../assets/market_research/2020/TMT_Market_Research.pdf";
import CANADIAN_FINANCIAL_PDF from "../assets/market_research/2020/Market-Research-Report-Canadian-Financial-Institutions.pdf";

const images = [
  {
    src: MEDIA_SECTOR,
    text: "Media Sector",
    btnText: "View Now",
    btnLink: MEDIA_SECTOR,
  },
  {
    src: MERGERS,
    text: "Mergers and Acquisitions",
    btnText: "View Now",
    btnLink: MERGERS,
  },
  {
    src: US_INFRA,
    text: "U.S. Infrastructure",
    btnText: "View Now",
    btnLink: US_INFRA,
  },
  {
    src: CANADIAN_POWER,
    text: "Canadian Power and Utilities",
    btnText: "View Now",
    btnLink: CANADIAN_POWER,
  },
  {
    src: CANNABIS,
    text: "Canadian Cannabis Sector Report",
    btnText: "View Now",
    btnLink: CANNABIS,
  },
];

const Market_Research_Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex == images.length - 1) {
        setCurrentIndex(0);
      } else {
        var curIndex = currentIndex;
        curIndex += 1;
        setCurrentIndex(curIndex);
      }
    }, 6000);
  });

  return (
    <div className="market-research-page">
      <div className="wrapper">
        <InvestaNav />
        <div className="image-stocks-overlay w-100">
          <Image
            src={images[currentIndex].src}
            className="image-stocks w-100"
          />
          <div className="stock-overlay">
            <h1>{images[currentIndex].text}</h1>
            <Button
              href={images[currentIndex].btnLink}
              className="text-center w-100"
              variant="outline-light"
              target="_blank"
              rel="noopener noreferrer">
              {" "}
              {images[currentIndex].btnText}
            </Button>
          </div>
        </div>
        <Container>
          <h3 className="mt-4">2022</h3>
          <hr />
          <Row>
            <Col>
              <ImageWithButton
                src={SPACE_IMG}
                btnText="Space Exploration Industry"
                btnLink={SPACE}
              />
              <ImageWithButton
                src={CANADIAN_IMG}
                btnText="Canadian Energy Industry"
                btnLink={CANADIAN_PUMP}
              />
              <ImageWithButton
                src={CANADIAN_RES_IMG}
                btnText="Canadian Residential"
                btnLink={CANADIAN_RES}
              />
              <ImageWithButton
                src={AGTECH_IMG}
                btnText="Agriculture Technology"
                btnLink={AGTECH}
              />
              <ImageWithButton
                src={US_VIDEO_GAME_IMG}
                btnText="U.S. Video Game"
                btnLink={US_VIDEO_GAME}
              />
            </Col>
            <Col>
              <ImageWithButton
                src={BLOCKCHAIN_IMG}
                btnText="A Guide to Blockchain"
                btnLink={BLOCKCHAIN}
              />
              <ImageWithButton
                src={SPORT_ENT_IMG}
                btnText="Sports Entertainment"
                btnLink={SPORT_ENT}
              />
              <ImageWithButton
                src={BIOTECH_IMG}
                btnText="Biotechnology Industry"
                btnLink={BIOTECH}
              />
              <ImageWithButton
                src={BEVERAGES_IMG}
                btnText="Beverages"
                btnLink={BEVERAGES}
              />
              <ImageWithButton
                src={GUIDE_TO_AI_IMG}
                btnText="A Guide to US Artificial Intelligence"
                btnLink={GUIDE_TO_AI}
              />
            </Col>
          </Row>
          <h3 className="mt-4">2021</h3>
          <hr />
          <Row>
            <Col>
              <ImageWithButton
                src={CANNABIS_IMG}
                btnText="Media Sector Report"
                btnLink={CANNABIS_PDF}
              />
              <ImageWithButton
                src={SEMI_CONDUC_IMG}
                btnText="US Semiconductor Industry"
                btnLink={SEMI_CONDUC_PDF}
              />
            </Col>
            <Col>
              <ImageWithButton
                src={SPAC_IMG}
                btnText="Special Purpose Acquisition"
                btnLink={SPAC_PDF}
              />
              <ImageWithButton
                src={SPACE_TRAVEL_IMG}
                btnText="Space Travel Industry Report"
                btnLink={SPACE_TRAVEL_PDF}
              />
            </Col>
          </Row>
          <h3 className="mt-4">2020</h3>
          <hr />
          <Row>
            <Col>
              <ImageWithButton
                src={MEDIA_SECTOR__IMG}
                btnText="Media Sector Report"
                btnLink={MEDIA_SECTOR_PDF}
              />
              <ImageWithButton
                src={CANADIAN_CANNABIS_IMG}
                btnText="Canadian Cannabis Sector Report"
                btnLink={CANADIAN_CANNABIS_PDF}
              />
              <ImageWithButton
                src={GLOBAL_ESPORTS_IMG}
                btnText="Global ESports Industry"
                btnLink={GLOBAL_ESPORTS_PDF}
              />
              <ImageWithButton
                src={CASINO_IMG}
                btnText="US Casino & Gaming Report"
                btnLink={CASINO_PDF}
              />
              <ImageWithButton
                src={CANADIAN_METALS_IMG}
                btnText="Canadian Metals and Mining Report"
                btnLink={CANADIAN_METALS_PDF}
              />
              <ImageWithButton
                src={CANADIAN_ENERGY_IMG}
                btnText="Canadian Energy Report"
                btnLink={CANADIAN_ENERGY_PDF}
              />
              <ImageWithButton
                src={CANADIAN_FINANCIAL_IMG}
                btnText="Canadian Financial Institutions"
                btnLink={CANADIAN_FINANCIAL_PDF}
              />
            </Col>
            <Col>
              <ImageWithButton
                src={MERGERS_ACQ_IMG}
                btnText="Mergers and Acquisitions"
                btnLink={MERGERS_ACQ_PDF}
              />
              <ImageWithButton
                src={US_HEALTH_CARE_IMG}
                btnText="US Healthcare Investor Guide"
                btnLink={US_HEALTH_CARE_PDF}
              />
              <ImageWithButton
                src={CANADIAN_TELE_COM_IMG}
                btnText="Canadian Telecommunications Report"
                btnLink={CANADIAN_TELE_PDF}
              />
              <ImageWithButton
                src={CANADIAN_RETAIL_IMG}
                btnText="CAD Retail Industry Report"
                btnLink={CANADIAN_RETAIL_PDF}
              />
              <ImageWithButton
                src={US_AIRLINE_IMG}
                btnText="US Airline Report"
                btnLink={US_AIRLINE_PDF}
              />
              <ImageWithButton
                src={TECH_IMG}
                btnText="Technology"
                btnLink={TECH_PDF}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
export default Market_Research_Page;
