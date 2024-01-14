import React, { useEffect, useState } from "react";
import {
  ImageWithButton,
  Footer,
  InvestaNav,
  Jumbo,
  Custom_Carousel,
} from "../components";
import { Row, Col, Container, Image, Button } from "react-bootstrap";

// Images
import PIPELINES from "../assets/images/stock pitches/TC_pipelines.jpeg";
import ADT_SEC from "../assets/images/stock pitches/adt_sec.jpeg";
import ACT from "../assets/images/stock pitches/act_con.jpeg";
import UNDER_ARMOUR from "../assets/images/stock pitches/under_armour.jpeg";
import LAMB_WESTON from "../assets/images/stock pitches/lamb_weston.jpeg";

// 2021
import CONST_BRANDS from "../assets/images/stock pitches/2021/const_brands.png";
import BERRY_GLOBAL from "../assets/images/stock pitches/2021/berry_global.png";
import AEM from "../assets/images/stock pitches/2021/aem.png";
import KLR_IMAGE from "../assets/images/stock pitches/2021/klr.png";
import HEROUX from "../assets/images/stock pitches/2021/heroux.png";
import _23ANDME_IMAGE from "../assets/images/stock pitches/2021/23andme.png";

// 2020
import ATZ_IMAGE from "../assets/images/stock pitches/2020/ATZ.png";
import EA_IMAGE from "../assets/images/stock pitches/2020/EA.png";
import HEALTHCARE_IMAGE from "../assets/images/stock pitches/2020/BIOGEN.png";
import HRB_IMAGE from "../assets/images/stock pitches/2020/HRBLOCK.png";
import MCD_IMAGE from "../assets/images/stock pitches/2020/mcdonalds.png";
import TARD_PITCH_IMAGE from "../assets/images/stock pitches/2020/ACT.png";
import ADT_IMAGE from "../assets/images/stock pitches/2020/ADT.png";
import TCP_IMAGE from "../assets/images/stock pitches/2020/TC.png";
import UA_IMAGE from "../assets/images/stock pitches/2020/UNDER_ARMOUR.png";
import UBC_LW_IMAGE from "../assets/images/stock pitches/2020/LAMB_WESTON.png";
import TITI_LLORI_IMAGE from "../assets/images/stock pitches/2020/SAPUTO.png";
import MANU_IMAGE from "../assets/images/stock pitches/2020/MANU.png";
import PKI_IMAGE from "../assets/images/stock pitches/2020/PKI.png";

// 2019
import CG_IMAGE from "../assets/images/stock pitches/2019/cg.png";
import CANTEL_IMAGE from "../assets/images/stock pitches/2019/cantel.png";
import DOLLAR_IMAGE from "../assets/images/stock pitches/2019/dollar.png";
import SANDSTORM_IMAGE from "../assets/images/stock pitches/2019/sandstorm_gold_pitch.png";
import ADOBE_IMAGE from "../assets/images/stock pitches/2019/adobe.png";

// Stock pitches

// 2021
import CONSTELLATION_BRANDS from "../assets/stock_pitches/2021/Investa-Insights-McMaster-STZ-Stock-Pitch - Jeffrey Howson.pdf";
import BERRY_GLOBAL_GROUP from "../assets/stock_pitches/2021/Investa-Insights-LaurierUS-BERY-Stock-Pitch - Sam Liu.pdf";
import KLR from "../assets/stock_pitches/2021/Investa-Insights-University-of-Ottawa-KLR-Stock-Pitch - Sean Butler.pdf";
import AGNICO_EAGLE_MINES from "../assets/stock_pitches/2021/Investa-Insights-Queens-AEM-Stock-Pitch - Mario Iskander.pdf";
import HEROUX_DEVTEK from "../assets/stock_pitches/2021/Investa-Insights-UBC-HRX-Stokc-Pitch - Alexander Kinnaird.pdf";
import _23ANDME from "../assets/stock_pitches/2021/Investa Inighst - York University - 23andMe.pdf";

// 2020
import ATZ from "../assets/stock_pitches/2020/ATZ-Pitch.pdf";
import EA_PITCH from "../assets/stock_pitches/2020/EA Pitch.pdf";
import HEALTHCARE from "../assets/stock_pitches/2020/Healthcare-Pitch-Schulich-1 2.pdf";
import HRB from "../assets/stock_pitches/2020/HRB-Pitchbook-vFinal-2.pdf";
import MCD from "../assets/stock_pitches/2020/Investa Insights - MCD.pdf";
import TARD_PITCH from "../assets/stock_pitches/2020/Investa_Insights_Queens_CAD_Couch_Tard_Pitch.pdf";
import ADT_MCGILL from "../assets/stock_pitches/2020/Investa-Insights-ADT-McGill.pdf";
import TCP from "../assets/stock_pitches/2020/Investa-Insights-TCP-Queens (1).pdf";
import UA_STOCK from "../assets/stock_pitches/2020/Investa-Insights-UA-Stock-Pitch.pdf";
import UBC_LW from "../assets/stock_pitches/2020/Investa-Insights-UBC-LW.pdf";
import TITI_LLORI from "../assets/stock_pitches/2020/Investa-Insights-Western-SAP-Stock-Pitch - Titi Ilori.pdf";
import MANU from "../assets/stock_pitches/2020/ManU-US-Investa_Insights.pdf";
import PKI from "../assets/stock_pitches/2020/PKI-CAD-Investa-Insights.pdf";

// 2019
import CG from "../assets/stock_pitches/2019/Canaccord-Genuity-2.pdf";
import CANTEL from "../assets/stock_pitches/2019/Cantel-Medical-Corp.pdf";
import DOLLAR from "../assets/stock_pitches/2019/Dollarama Pitch.pdf";
import SANDSTORM from "../assets/stock_pitches/2019/Sandstorm-Gold-Pitch.pdf";
import ADOBE from "../assets/stock_pitches/2019/Adobe Stock Pitch.pdf";

const images = [
  {
    src: PIPELINES,
    text: "TC Pipelines, LP",
    btnText: "View Now",
    btnLink: TCP,
  },
  {
    src: ADT_SEC,
    text: "ADT Security Services",
    btnText: "View Now",
    btnLink: ADT_MCGILL,
  },
  {
    src: ACT,
    text: "Alimentation Couche-Tard",
    btnText: "View Now",
    btnLink: TARD_PITCH,
  },
  {
    src: UNDER_ARMOUR,
    text: "Under Armour Inc.",
    btnText: "View Now",
    btnLink: UA_STOCK,
  },
  {
    src: LAMB_WESTON,
    text: "Lamb Weston",
    btnText: "View Now",
    btnLink: UBC_LW,
  },
];

const Stock_Pitches_Page = () => {
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
    <div className="stock-page">
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
        <Container className="body mt-5">
          <h3 className="mt-4">2021</h3>
          <hr />
          <Row>
            <Col>
              <ImageWithButton
                src={CONST_BRANDS}
                btnText="Constellation Brands (NYSE:STZ)"
                btnLink={CONSTELLATION_BRANDS}
              />
              <ImageWithButton
                src={KLR_IMAGE}
                btnText="Kaleyra Inc (NYSE: KLR)"
                btnLink={KLR}
              />
              <ImageWithButton
                src={_23ANDME_IMAGE}
                btnText="23andMe (NASDAQ: Me)"
                btnLink={_23ANDME}
              />
            </Col>
            <Col>
              <ImageWithButton
                src={BERRY_GLOBAL}
                btnText="Berry Global Group, Inc."
                btnLink={BERRY_GLOBAL_GROUP}
              />
              <ImageWithButton
                src={AEM}
                btnText="Agnico Eagle Mines (TSX:AEM)"
                btnLink={AGNICO_EAGLE_MINES}
              />
              <ImageWithButton
                src={HEROUX}
                btnText="Heroux Devtek (TSX:HRX)"
                btnLink={HEROUX_DEVTEK}
              />
            </Col>
          </Row>
          <h3 className="mt-4">2020</h3>
          <hr />
          <Row>
            <Col>
              <ImageWithButton
                src={MANU_IMAGE}
                btnText="Manchester United PLC"
                btnLink={MANU}
              />
              <ImageWithButton
                src={TCP_IMAGE}
                btnText="TC PipeLines (NYSE:TCP)"
                btnLink={TCP}
              />
              <ImageWithButton
                src={TARD_PITCH_IMAGE}
                btnText="Alimentation Couche-Tard"
                btnLink={TARD_PITCH}
              />
              <ImageWithButton
                src={UBC_LW_IMAGE}
                btnText="Lamb Weston"
                btnLink={UBC_LW}
              />
              <ImageWithButton
                src={HRB_IMAGE}
                btnText="H&R Block Inc."
                btnLink={HRB}
              />
              <ImageWithButton
                src={HEALTHCARE_IMAGE}
                btnText="Biogen Inc."
                btnLink={HEALTHCARE}
              />
              <ImageWithButton
                src={EA_IMAGE}
                btnText="Electronic Arts Inc."
                btnLink={EA_PITCH}
              />
            </Col>
            <Col>
              <ImageWithButton
                src={TITI_LLORI_IMAGE}
                btnText="Saputo Inc."
                btnLink={TITI_LLORI}
              />
              <ImageWithButton
                src={ADT_IMAGE}
                btnText="ADT Security Services"
                btnLink={ADT_MCGILL}
              />
              <ImageWithButton
                src={UA_IMAGE}
                btnText="Under Armour"
                btnLink={UNDER_ARMOUR}
              />
              <ImageWithButton
                src={PKI_IMAGE}
                btnText="PerkinElmer, Inc."
                btnLink={PKI}
              />
              <ImageWithButton
                src={MCD_IMAGE}
                btnText="McDonald's"
                btnLink={MCD}
              />
              <ImageWithButton
                src={ATZ_IMAGE}
                btnText="Aritzia"
                btnLink={ATZ}
              />
            </Col>
          </Row>
          <h3 className="mt-4">2019</h3>
          <hr />
          <Row>
            <Col>
              <ImageWithButton
                src={CG_IMAGE}
                btnText="Canaccord Genuity"
                btnLink={CG}
              />
              <ImageWithButton
                src={DOLLAR_IMAGE}
                btnText="Dollarama Pitch"
                btnLink={DOLLAR}
              />
              <ImageWithButton
                src={ADOBE_IMAGE}
                btnText="Adobe Stock Pitch"
                btnLink={ADOBE}
              />
            </Col>
            <Col>
              <ImageWithButton
                src={CANTEL_IMAGE}
                btnText="Cantel Pitch"
                btnLink={CANTEL}
              />
              <ImageWithButton
                src={SANDSTORM_IMAGE}
                btnText="Sandstorm Gold Pitch"
                btnLink={SANDSTORM}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
export default Stock_Pitches_Page;
