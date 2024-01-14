import React, { useState } from "react";
import {
  CustomBox,
  CustomBoxClickable,
  Footer,
  InvestaNav,
  Jumbo,
} from "../components";
import {
  Container,
  Button,
  Dropdown,
  Image,
  Row,
  Modal,
} from "react-bootstrap";
import ReactCardFlip from "react-card-flip";

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

import INTERESTED_IN_JOINING from "../assets/Investa-Analyst-Package.pdf";

import BACK_ARROW from "../assets/images/return-arrow.png";

// Investa logo
import INVESTA_LOGO from "../assets/icons/investalogo.webp";

// Teams exec images

// Primary team
import SARAH_PENG from "../assets/teams_page/primary-exec-team/sarah_peng.jpeg";
import ISAAC_DONG from "../assets/teams_page/primary-exec-team/isaac_dong.jpeg";
import ALI_MOVASAGHI from "../assets/teams_page/primary-exec-team/ali_movasaghi.jpeg";
import MATTHEW_DARROCH from "../assets/teams_page/primary-exec-team/matthew_darroch.jpeg";
import JACKSON_PICKUP from "../assets/teams_page/primary-exec-team/jackson_pickup.jpeg";
import ORI_ERLICH from "../assets/teams_page/primary-exec-team/ori_erlich.jpeg";
import LAUREN_MACDONALD from "../assets/teams_page/primary-exec-team/lauren_macdonald.jpeg";
import CHARLOTTE_MCKENZIE from "../assets/teams_page/primary-exec-team/charlotte_mckenzie.jpeg";
import ANDY_SHUAI from "../assets/teams_page/primary-exec-team/andy_shuai.jpeg";
import DANIELLE_DOBBS from "../assets/teams_page/primary-exec-team/danielle_dobbs.jpeg";
import JONATHAN_WANG from "../assets/teams_page/primary-exec-team/jonathan_wang.jpeg";
import SHAHRUKH_QURESHI from "../assets/teams_page/primary-exec-team/shahrukh_qureshi.jpeg";
import SOPHIA_CAPE from "../assets/teams_page/primary-exec-team/sophia_cape.jpeg";
import EMILY_YANG from "../assets/teams_page/primary-exec-team/emily_yang.jpeg";

// McMaster
import CARTER_JONES from "../assets/teams_page/mcmaster/Carter Jones-Robinson Headshot 2022 - Carter Jones-Robinson.jpeg";
import CHRISTOPHER_LAPPAS from "../assets/teams_page/mcmaster/Christopher_Lappas_Fall2022 - Christopher Lappas.jpeg";
import MANGUS_PETURSSON from "../assets/teams_page/mcmaster/Magnus_Petursson_Fall2022 - Magnus Petursson.jpeg";
import SEAN_SPENCER from "../assets/teams_page/mcmaster/Sean_Spencer_Headshot - Sean Spencer.jpeg";
import JOSHUA_HAMPEL from "../assets/teams_page/mcmaster/Joshua Hampel - Headshot - Joshua Hampel.jpg";

// Western
import CAMERON from "../assets/teams_page/western/Headshot - Cameron e.jpg";

// Queens
import CONNOR_GITTENS from "../assets/teams_page/queens/connor.jpeg";
import JANET from "../assets/teams_page/queens/719B0BC0-CBD9-4469-8F24-8A6C6464EAAC_1_201_a - Janet Gu.jpeg";
import HO from "../assets/teams_page/queens/1681340249126 (1) - Ho how.jpeg";
import MAXIM from "../assets/teams_page/queens/IMG_0065 - Maxim Kislitsyn.JPG";
import MALCOLM from "../assets/teams_page/queens/IMG_0200 - Malcolm Shields.jpeg";

// Laurier
import DEREK_LI from "../assets/teams_page/laurier/derek_li.jpeg";
import BEN_CHILIAN from "../assets/teams_page/laurier/Ben Chilian Headshot 2021 - Ben Chilian.jpg";
import DYLAN_CHEN from "../assets/teams_page/laurier/Dylan_Chen_Headshot - Dylan Chen.jpg";
import STEPHEN_STACK from "../assets/teams_page/laurier/Stephen Stack Headshot - Stephen Stack.jpg";
import JESSE_ZHAO from "../assets/teams_page/laurier/jesse_zhao.jpeg";

// UBC
import DAVID_DE from "../assets/teams_page/ubc/david_de.jpeg";
import SATYAJIT from "../assets/teams_page/ubc/satyajit.jpeg";
import ALICIA_WANG from "../assets/teams_page/ubc/headshot_Alicia - Alicia Wang.jpg";
import TIANZE_WANG from "../assets/teams_page/ubc/Headshot - Tianze Wang.jpg";

// UFT
import KATHLEEN_HUANG from "../assets/teams_page/uft/kathleen_huang.jpeg";
import MURTAZA_HUSAIN from "../assets/teams_page/uft/murtaza_husain.jpeg";
import JUNLANG_CHEN from "../assets/teams_page/uft/Profile Picture - Junlang Chen.jpg";
import WILLIAM_QIAN from "../assets/teams_page/uft/william_qian.jpeg";

// UW
import AHMED_AAMIR from "../assets/teams_page/waterloo/ahmed_aamir.jpeg";
import SAHARSH_SUR from "../assets/teams_page/waterloo/saharsh_sur.jpeg";
import NIPUN_KAPUR from "../assets/teams_page/waterloo/nipun_kapur.jpeg";
import GURKOMAL_GILL from "../assets/teams_page/waterloo/gurkomal_gill.jpeg";

// TMU
import AAMIR_ANWAR from "../assets/teams_page/tmu/Aamir Headshot - Aamir Anwar.jpg";
import CHARLES_POLICARPIO from "../assets/teams_page/tmu/Charles Policarpio Window (1) - Charles Policarpio.jpg";
import MOHAMMAD_AAQUIB from "../assets/teams_page/tmu/edited - Mohammad Aaquib.jpg";
import MICAELA_PANTOJA from "../assets/teams_page/tmu/micaela headshot - Micaela Pantoja Pasache.jpeg";
import PETER_NGUYEN from "../assets/teams_page/tmu/R0001105 (1) - Peter Nguyen.JPG";
import MATEO_PAZ from "../assets/teams_page/tmu/Screen Shot 2023-11-11 at 11.16.41 AM - Mateo Paz Portugal.png";
import JASON_RAMSAY from "../assets/teams_page/tmu/TRIC Headshot - Jason B. Ramsay.jpg";
import JOE_DEVRIES from "../assets/teams_page/tmu/TRREA-2023 Picture - Joe Devries.jpg";

// uOttawa
import JOSHUA_BRULE from "../assets/teams_page/uottawa/4AA6FB42-69B1-4006-B57B-AA266D8B3371 - Josh Brule.jpg";
import ISABELLE_MENARD from "../assets/teams_page/uottawa/Headshot_IM - Isabelle Menard.jpg";
import RUSHIKA_BUCK from "../assets/teams_page/uottawa/a-rushika5 - Rushika Bucktowonsing.jpeg";
import CALVIN_DIALLO from "../assets/teams_page/uottawa/DIALLO_C_0416(4x4) (1) - Calvin D.jpg";
import OWEN_SCHMIDT from "../assets/teams_page/uottawa/Heashot - Owen Schmidt.jpg";

// York
import ASAD from "../assets/teams_page/york/asad.png";
import HARS from "../assets/teams_page/york/Gwalani_Harshit_Headshot - Harshit Gwalani.jpeg";
import TRISTAN from "../assets/teams_page/york/Tristan-Guzzo_Headshot - Tristan Guzzo.jpeg";

const Teams_Page = () => {
  // Options
  const [optionsViewable, setOptionsViewable] = useState(true);

  const chapterOptions = [
    {
      srcfile: QUEENS,
      designation: "Queens University",
    },
    {
      srcfile: WESTERN,
      designation: "Western University",
    },
    // {
    //   srcfile: MCGILL,
    //   designation: "McGill University",
    // },
    {
      srcfile: UBC,
      designation: "University of British Columbia",
    },
    {
      srcfile: UFT,
      designation: "University of Toronto",
    },
    {
      srcfile: YORK,
      designation: "York University",
    },
    {
      srcfile: LAURIER,
      designation: "Wilfrid Laurier University",
    },
    {
      srcfile: MAC,
      designation: "McMaster University",
    },
    {
      srcfile: UOU,
      designation: "University of Ottawa",
    },
    {
      srcfile: UW,
      designation: "University of Waterloo",
    },
    {
      srcfile: TMU,
      designation: "Toronto Metropolitan University",
    },
  ];

  // Teams
  const [execTeam, setExecTeam] = useState(false);
  const [queenTeam, setQueenTeam] = useState(false);
  const [westernTeam, setWesternTeam] = useState(false);
  const [mcgillTeam, setMcgillTeam] = useState(false);
  const [ubcTeam, setUbcTeam] = useState(false);
  const [uftTeam, setUftTeam] = useState(false);
  const [yorkTeam, setYorkTeam] = useState(false);
  const [laurierTeam, setLaurierTeam] = useState(false);
  const [macTeam, setMacTeam] = useState(false);
  const [uooTeam, setUooTeam] = useState(false);
  const [uwTeam, setUwTeam] = useState(false);
  const [tmuTeam, setTmuTeam] = useState(false);

  // Exec team cards
  const [sarahIsFlipped, setSarahIsFlipped] = useState(false);
  const [isaacIsFlipped, setIssacIsFlipped] = useState(false);
  const [aliIsFlipped, setAliIsFlipped] = useState(false);

  // For header
  const [currentSelectedTeam, setCurrentSelectedTeam] = useState(null);

  // For modal
  const [show, setShow] = useState(false);
  const dummy_obj = {
    first_name: "Sarah",
    last_name: "Peng",
    isFlipped: sarahIsFlipped,
    img: SARAH_PENG,
    role: "Co-President",
    setFunc: setSarahIsFlipped,
    bio: "Sarah joined Investa Insights in her 1st year of Commerce at Queen’s University. Outside of Investa, Sarah is currently completing her second internship at TD Securities as a Summer Investment Banking Analyst. Additionally, Sarah was Co-Chair of the Inter-Collegiate Business Competition and has been involved with the Queen’s Corporate Competition and Queen’s Social Investment Initiative. Sarah enjoys figure-skating, snowboarding, and travelling in her free time.",
    adjusted_bio: false,
    linkedin:
      "https://www.linkedin.com/in/sarah-peng-365057187/?originalSubdomain=ca",
  };
  const [modalData, setModalData] = useState(dummy_obj);

  // Team info
  var execLeadershipTeamInfo = [
    {
      first_name: "Sarah",
      last_name: "Peng",
      isFlipped: sarahIsFlipped,
      img: SARAH_PENG,
      role: "Co-President",
      setFunc: setSarahIsFlipped,
      bio: "Sarah joined Investa Insights in her 1st year of Commerce at Queen’s University. Outside of Investa, Sarah is currently completing her second internship at TD Securities as a Summer Investment Banking Analyst. Additionally, Sarah was Co-Chair of the Inter-Collegiate Business Competition and has been involved with the Queen’s Corporate Competition and Queen’s Social Investment Initiative. Sarah enjoys figure-skating, snowboarding, and travelling in her free time.",
      adjusted_bio: false,
      linkedin:
        "https://www.linkedin.com/in/sarah-peng-365057187/?originalSubdomain=ca",
    },
    {
      first_name: "Ali",
      last_name: "Movasaghi",
      isFlipped: aliIsFlipped,
      img: ALI_MOVASAGHI,
      role: "Co-President",
      setFunc: setAliIsFlipped,
      bio: "Ali is a Third year BBA student, minoring in Economics with prior internship experience in Private Equity. Ali was first introduced to finance through Investa’s Laurier chapter as anInvestment Analyst and is now the Co-President of Investa Insights for 2023-2024 calendar year, managing the Sponsorships, Events and Internal Relations portfolio. Ali has completed internships at Thesis Capital Partners, a private equity advisory firm based in Houston Texas, and most recently at Vienna Holdings Group where he was a part of the acquisition of a senior home care company. Ali has held a multitude of leadership positions across the Laurier community as Co-Founder and Co-President of Laurier Professional Development club, a club that helps students learn more about the different careers path in business. Alongside leading Investa for the upcoming year, Ali is also leading LCG, Laurier’s pro-bono consulting club. Ali is from Toronto, Ontario and outside of academics and professional pursuits he enjoys boxing, going to the gym and spending time with family and friends.",
      adjusted_bio: false,
      linkedin: "https://www.linkedin.com/in/ali-movasaghi/",
    },
    {
      first_name: "Isaac",
      last_name: "Dong",
      isFlipped: isaacIsFlipped,
      img: ISAAC_DONG,
      role: "Co-President",
      setFunc: setIssacIsFlipped,
      bio: "Isaac is a third year Ivey HBA student who studied Economics during his first two years at Western. Isaac first joined Investa’s Western Chapter in 2021 as an Investment Analyst, then served as the Co-Chapter Head of the Western Chapter in 2022. Now, Isaac is the Co-President of Investa Insights for 2023-2024 calendar year, managing the Finance, Technology, and R&D portfolio. Isaac has completed internships in multiples areas of finance, including Investment Management, Investment Banking, and Wealth Management. In the Fall term, Isaac will be joining National Bank’s Investment Banking team. Alongside leading Investa for the upcoming year, Isaac also leads the Research team at Ivey Investor’s Society, a research-oriented organization focused publishing insights on various investment strategies. Outside of the Finance community, Isaac also serves as the Treasurer and Board Member at Marketyze, a non-profit organization that helps High-School students explore the field of marketing. Isaac is from Ottawa, Ontario and outside of academics and professional pursuits he enjoys golf, fitness and spending time with family and friends.   Isaac has an interest in the following areas: Private Equity, Investment Banking, Wealth Management",
      adjusted_bio: false,
      linkedin: "https://www.linkedin.com/in/isaacdongwestern/",
    },
  ];

  // Exec team info
  var execTeamInfo = [
    {
      first_name: "Matthew",
      last_name: "Darroch",
      img: MATTHEW_DARROCH,
      role: "VP of Internal",
      linkedin: "https://www.linkedin.com/in/matthew-darroch/",
    },
    {
      first_name: "Jackson",
      last_name: "Pickup",
      img: JACKSON_PICKUP,
      role: "VP of Public Relations",
      linkedin: "https://www.linkedin.com/in/jacksonpickup/",
    },
    {
      first_name: "Ori",
      last_name: "Erlich",
      img: ORI_ERLICH,
      role: "VP of Finance",
      linkedin: "https://www.linkedin.com/in/orierlich/",
    },
    {
      first_name: "Lauren",
      last_name: "MacDonald",
      img: LAUREN_MACDONALD,
      role: "VP of Strategy",
      linkedin: "https://www.linkedin.com/in/laurenmacdonald-/",
    },
    {
      first_name: "Charlotte",
      last_name: "McKenzie",
      img: CHARLOTTE_MCKENZIE,
      role: "VP of Marketing",
      linkedin: "https://www.linkedin.com/in/charlotte-mckenzie/",
    },
    {
      first_name: "Andy",
      last_name: "Shuai",
      img: ANDY_SHUAI,
      role: "VP of Events",
      linkedin: "https://www.linkedin.com/in/andy-shuai/",
    },
    {
      first_name: "Jonathan",
      last_name: "Wang",
      img: JONATHAN_WANG,
      role: "VP of Corporate",
      linkedin: "https://www.linkedin.com/in/jw-wlu-uw/",
    },
    {
      first_name: "Emily",
      last_name: "Yang",
      img: EMILY_YANG,
      role: "VP of R&D",
      linkedin:
        "https://www.linkedin.com/in/emily-yang-4866281b3/?originalSubdomain=ca",
    },
    {
      first_name: "Shahrukh",
      last_name: "Qureshi",
      img: SHAHRUKH_QURESHI,
      role: "VP of Tech",
      linkedin: "https://www.linkedin.com/in/qureshishahrukh/",
    },
    {
      first_name: "Danielle",
      last_name: "Dobbs",
      img: DANIELLE_DOBBS,
      role: "Director of Events",
      linkedin: "https://www.linkedin.com/in/danielle-dobbs/",
    },
    {
      first_name: "Sophia",
      last_name: "Cape",
      img: SOPHIA_CAPE,
      role: "Director of Tech",
      linkedin: "https://www.linkedin.com/in/sophia-cape/",
    },
  ];

  // McMaster team info
  var mcmasterTeamInfo = [
    {
      first_name: "Joshua",
      last_name: "Hampel",
      img: JOSHUA_HAMPEL,
      role: "Chapter Head",
      linkedin: "https://www.linkedin.com/in/joshuahampel/",
    },
    {
      first_name: "Sean",
      last_name: "Spencer",
      img: SEAN_SPENCER,
      role: "Analyst",
      linkedin: "https://www.linkedin.com/in/sean-spencer-mcmaster/",
    },
    {
      first_name: "Magnus",
      last_name: "Petursson",
      img: MANGUS_PETURSSON,
      role: "Analyst",
      linkedin: "https://www.linkedin.com/in/magnus-petursson/",
    },
    {
      first_name: "Christopher",
      last_name: "Lappas",
      img: CHRISTOPHER_LAPPAS,
      role: "Analyst",
      linkedin: "https://www.linkedin.com/in/christopherlappas/",
    },
    {
      first_name: "Carter",
      last_name: "Jones-Robinson",
      img: CARTER_JONES,
      role: "Analyst",
      linkedin: "https://www.linkedin.com/in/carterjones-robinson/",
    },
  ];

  // Queen team info
  var queenTeamInfo = [
    {
      first_name: "Malcolm",
      last_name: "Shields",
      img: MALCOLM,
      role: "Chapter Head",
      linkedin: "https://www.linkedin.com/in/malcolm-s-441125105/",
    },
    {
      first_name: "Connor",
      last_name: "Gittens",
      img: CONNOR_GITTENS,
      role: "Portfolio Manager",
      linkedin: "https://www.linkedin.com/in/connorgittens/",
    },
    {
      first_name: "Janet",
      last_name: "Gu",
      img: JANET,
      role: "Analyst",
      linkedin: "https://www.linkedin.com/in/janet-gu/?originalSubdomain=ca",
    },
    {
      first_name: "Howie",
      last_name: "Wu",
      img: HO,
      role: "Analyst",
      linkedin:
        "https://www.linkedin.com/in/howie-hongyi-wu/?originalSubdomain=ca",
    },
    {
      first_name: "Maxim",
      last_name: "Kislitsyn",
      img: MAXIM,
      role: "Analyst",
      linkedin: "https://www.linkedin.com/in/maxim-kislitsyn/",
    },
    {
      first_name: "Charlotte",
      last_name: "McKenzie",
      img: CHARLOTTE_MCKENZIE,
      role: "Analyst",
      linkedin: "https://www.linkedin.com/in/charlotte-mckenzie/",
    },
  ];

  // Laurier team info
  var laurierTeamInfo = [
    {
      first_name: "Jesse",
      last_name: "Zhao",
      img: JESSE_ZHAO,
      role: "Chapter Head",
      linkedin: "https://www.linkedin.com/in/jessezhao01/",
    },
    {
      first_name: "Ben",
      last_name: "Chilian",
      img: BEN_CHILIAN,
      role: "Portfolio Manager",
      linkedin: "https://www.linkedin.com/in/ben-chilian/",
    },
    {
      first_name: "Derek",
      last_name: "Li",
      img: DEREK_LI,
      role: "Analyst",
      linkedin: "https://www.linkedin.com/in/derek-li-9918811b0/",
    },
    {
      first_name: "Dylan",
      last_name: "Chen",
      img: DYLAN_CHEN,
      role: "Analyst",
      linkedin: "https://www.linkedin.com/in/dylan-chen-/",
    },
    {
      first_name: "Stephen",
      last_name: "Stack",
      img: STEPHEN_STACK,
      role: "Analyst",
      linkedin: "https://www.linkedin.com/in/stephen-stack-265529251/",
    },
  ];

  // UBC team info
  var ubcTeamInfo = [
    {
      first_name: "David",
      last_name: "de Souza Vaz",
      img: DAVID_DE,
      role: "Analyst",
      linkedin: "https://www.linkedin.com/in/david-de-souza-vaz/",
    },
    {
      first_name: "Satyajit",
      last_name: "Bhattacharya",
      img: SATYAJIT,
      role: "Analyst",
      linkedin: "https://www.linkedin.com/in/satyajit-bhattacharya-157abb192/",
    },
    {
      first_name: "Alicia",
      last_name: "Wang",
      img: ALICIA_WANG,
      role: "Analyst",
      linkedin: "https://www.linkedin.com/in/alicia-wang-24720b251/",
    },
    {
      first_name: "Grace",
      last_name: "Wang",
      img: TIANZE_WANG,
      role: "Analyst",
      linkedin: "https://www.linkedin.com/in/tianze-wang/",
    },
  ];

  // UFT team info
  var uftTeamInfo = [
    {
      first_name: "Junlang",
      last_name: "Chen",
      img: JUNLANG_CHEN,
      role: "Portfolio Manager",
      linkedin: "https://www.linkedin.com/in/sunny-junlang-chen/",
    },
    {
      first_name: "Kathleen",
      last_name: "Huang",
      img: KATHLEEN_HUANG,
      role: "Analyst",
      linkedin: "https://www.linkedin.com/in/KathleenYhuang/",
    },
    {
      first_name: "Murtaza",
      last_name: "Husain",
      img: MURTAZA_HUSAIN,
      role: "Analyst",
      linkedin: "https://www.linkedin.com/in/husain-murtaza/",
    },
    {
      first_name: "William",
      last_name: "Qian",
      img: WILLIAM_QIAN,
      role: "Analyst",
      linkedin: "https://www.linkedin.com/in/williamqian19/",
    },
  ];

  // UW team info
  var uwTeamInfo = [
    {
      first_name: "Nipun",
      last_name: "Kapur",
      img: NIPUN_KAPUR,
      role: "Portfolio Manager",
      linkedin: "https://www.linkedin.com/in/nipun2kapur/",
    },
    {
      first_name: "Ahmed",
      last_name: "Aamir",
      img: AHMED_AAMIR,
      role: "Analyst",
      linkedin: "https://www.linkedin.com/in/ahmedaamirhussain/",
    },
    {
      first_name: "Saharsh",
      last_name: "Suryadevara",
      img: SAHARSH_SUR,
      role: "Analyst",
      linkedin: "https://www.linkedin.com/in/saharshsuryadevara/",
    },
    {
      first_name: "Gurkomal",
      last_name: "Gill",
      img: GURKOMAL_GILL,
      role: "Analyst",
      linkedin: "https://www.linkedin.com/in/gurkomalgill/",
    },
  ];

  // Western team info
  var uwoTeamInfo = [
    {
      first_name: "Cameron",
      last_name: "Mirlocca",
      img: CAMERON,
      role: "Portfolio Manager",
      linkedin: "https://ca.linkedin.com/in/cameron-mirlocca-b74810261",
    },
  ];

  // TMU team info
  var tmuTeamInfo = [
    {
      first_name: "Aamir",
      last_name: "Anwar",
      img: AAMIR_ANWAR,
      role: "Chapter Head",
      linkedin:
        "https://www.linkedin.com/in/aamiranwar99/?originalSubdomain=ca",
    },
    {
      first_name: "Jason",
      last_name: "Ramsay",
      img: JASON_RAMSAY,
      role: "Chapter Head",
      linkedin:
        "https://www.linkedin.com/in/jason-b-ramsay-538910197/?originalSubdomain=ca",
    },
    {
      first_name: "Peter",
      last_name: "Nguyen",
      img: PETER_NGUYEN,
      role: "Analyst",
      linkedin:
        "https://www.linkedin.com/in/peter-nguyen-9ba515217/?originalSubdomain=ca",
    },
    {
      first_name: "Charles",
      last_name: "Policarpio",
      img: CHARLES_POLICARPIO,
      role: "Analyst",
      linkedin:
        "https://www.linkedin.com/in/charles-policarpio/?originalSubdomain=ca",
    },
    {
      first_name: "Mohammad",
      last_name: "Aaquib",
      img: MOHAMMAD_AAQUIB,
      role: "Analyst",
      linkedin:
        "https://www.linkedin.com/in/mohammadaaquib/?originalSubdomain=ca",
    },
    {
      first_name: "Micaela",
      last_name: "Pantoja",
      img: MICAELA_PANTOJA,
      role: "Analyst",
      linkedin:
        "https://www.linkedin.com/in/micaelapantoja/?originalSubdomain=ca",
    },
    {
      first_name: "Joshua",
      last_name: "Klomp",
      img: JOE_DEVRIES,
      role: "Analyst",
      linkedin: "https://www.linkedin.com/in/joshua-klomp-191843252/",
    },
    {
      first_name: "Mateo",
      last_name: "Paz Portugal",
      img: MATEO_PAZ,
      role: "Analyst",
      linkedin: "",
    },
  ];

  var uOttawaTeamInfo = [
    {
      first_name: "Isabelle",
      last_name: "Menard",
      img: ISABELLE_MENARD,
      role: "Portfolio Manager",
      linkedin:
        "https://www.linkedin.com/in/isabelle-menard/?originalSubdomain=ca",
    },
    {
      first_name: "Joshua",
      last_name: "Brule",
      img: JOSHUA_BRULE,
      role: "Analyst",
      linkedin:
        "https://www.linkedin.com/in/joshua-brule/?originalSubdomain=ca",
    },
    {
      first_name: "Rushika",
      last_name: "Bucktowonsing",
      img: RUSHIKA_BUCK,
      role: "Analyst",
      linkedin:
        "https://www.linkedin.com/in/rushika-bucktowonsing-4427b0262/?originalSubdomain=ca",
    },
    {
      first_name: "Calvin",
      last_name: "Diallo",
      img: CALVIN_DIALLO,
      role: "Analyst",
      linkedin:
        "https://www.linkedin.com/in/calvin-diallo/?originalSubdomain=ca",
    },
    {
      first_name: "Owen",
      last_name: "Schmidt",
      img: OWEN_SCHMIDT,
      role: "Analyst",
      linkedin:
        "https://www.linkedin.com/in/owen-schmidt-72674823a/?originalSubdomain=ca",
    },
  ];

  var yorkTeamInfo = [
    {
      first_name: "Tristan",
      last_name: "Guzzo",
      img: TRISTAN,
      role: "Analyst",
      linkedin:
        "https://www.linkedin.com/in/tristan-guzzo-b4bba2224/?originalSubdomain=ca",
    },
    {
      first_name: "Harshit",
      last_name: "Gwalani",
      img: HARS,
      role: "Analyst",
      linkedin:
        "https://www.linkedin.com/in/harshit-gwalani/?originalSubdomain=ca",
    },
    {
      first_name: "Asad",
      last_name: "Rizvi",
      img: ASAD,
      role: "Analyst",
      linkedin:
        "https://www.linkedin.com/in/asad-rizvi-5320b1216/?originalSubdomain=ca",
    },
  ];

  const set_others_false = () => {
    setExecTeam(false);
    setQueenTeam(false);
    setWesternTeam(false);
    setMcgillTeam(false);
    setUbcTeam(false);
    setUftTeam(false);
    setYorkTeam(false);
    setLaurierTeam(false);
    setMacTeam(false);
    setUooTeam(false);
    setUwTeam(false);
    setTmuTeam(false);
    // Hiding all other options
    setOptionsViewable(false);
  };

  const handleViewTeamClick = (teamSelected) => {
    set_others_false();
    if (teamSelected == "Executive Team") {
      setCurrentSelectedTeam("Executive Team");
      setExecTeam(true);
    } else if (teamSelected == "McMaster University") {
      setCurrentSelectedTeam("McMaster's Team");
      setMacTeam(true);
    } else if (teamSelected == "Queens University") {
      setCurrentSelectedTeam("Queen's Team");
      setQueenTeam(true);
    } else if (teamSelected == "Western University") {
      setCurrentSelectedTeam("Western's Team");
      setWesternTeam(true);
    } else if (teamSelected == "McGill University") {
      setCurrentSelectedTeam("McGill's Team");
      setMcgillTeam(true);
    } else if (teamSelected == "University of British Columbia") {
      setCurrentSelectedTeam("UBC's Team");
      setUbcTeam(true);
    } else if (teamSelected == "University of Toronto") {
      setCurrentSelectedTeam("UFT's Team");
      setUftTeam(true);
    } else if (teamSelected == "York University") {
      setCurrentSelectedTeam("York's Team");
      setYorkTeam(true);
    } else if (teamSelected == "Wilfrid Laurier University") {
      setCurrentSelectedTeam("WLU's Team");
      setLaurierTeam(true);
    } else if (teamSelected == "University of Ottawa") {
      setCurrentSelectedTeam("University of Ottawa's Team");
      setUooTeam(true);
    } else if (teamSelected == "University of Waterloo") {
      setCurrentSelectedTeam("UW's Team");
      setUwTeam(true);
    } else if (teamSelected == "Toronto Metropolitan University") {
      setCurrentSelectedTeam("TMU's Team");
      setTmuTeam(true);
    }
  };

  const displayBio = (member) => {
    var bio = "";
    if (member.bio.length > 140) {
      bio = member.bio.substring(0, 140);
    }
    bio += "...";
    member.adjusted_bio = true;
    return bio;
  };

  return (
    <div className="teams-page">
      <div className="wrapper">
        <InvestaNav />
        <Jumbo
          elements={
            <div className="jumbo-team">
              <h1>Meet Our Team</h1>
              <p>
                Investa Insights has an Executive Team and Chapter Executives at
                11 Universities
              </p>
              <Button
                variant="outline-light"
                href={INTERESTED_IN_JOINING}
                target="_blank"
                rel="noopener noreferrer">
                Interested in joining?
              </Button>
            </div>
          }
        />
        <Container>
          {/* --------- */}
          <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            size="lg"
            aria-labelledby="example-custom-modal-styling-title">
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                {modalData.first_name}'s Full Biography
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <Image roundedCircle src={modalData.img} className="mt-3" />
              <p>{modalData.bio}</p>
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
          {currentSelectedTeam ? (
            <div className="team-selected-msg">
              {/* <h4 className="mt-5">
                Welcome from the {currentSelectedTeam}! <hr /> Click{" "}
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    set_others_false();
                    setOptionsViewable(true);
                    setCurrentSelectedTeam(null);
                  }}>
                  here
                </a>{" "}
                to go back
              </h4> */}
              <a
                onClick={(e) => {
                  e.preventDefault();
                  set_others_false();
                  setOptionsViewable(true);
                  setCurrentSelectedTeam(null);
                }}>
                <Image
                  src={BACK_ARROW}
                  style={{ width: "30px" }}
                  className="mt-3"
                />
              </a>
              <h4 className="mt-3">Welcome from the {currentSelectedTeam}!</h4>
            </div>
          ) : null}
          {optionsViewable ? (
            <div>
              <Row className="justify-content-around chapters mt-4">
                <CustomBoxClickable
                  srcfile={INVESTA_LOGO}
                  customclass="box-shadow-list-teams-banners-investa mt-3 teams-banners clickable-box-investa"
                  header="Executive Team"
                  headerClass="mt-4 text-white"
                  clickFunc={(e) => {
                    e.preventDefault();
                    window.scrollTo(0, 0);
                    handleViewTeamClick("Executive Team");
                  }}
                />
              </Row>
              <Row>
                {chapterOptions.map((chapter, index) => {
                  return (
                    <CustomBoxClickable
                      srcfile={chapter.srcfile}
                      customclass="box-shadow-list-teams-banners-chapters mt-3 w-50 teams-banners clickable-box-chapters"
                      header={chapter.designation}
                      clickFunc={(e) => {
                        e.preventDefault();
                        window.scrollTo(0, 0);
                        handleViewTeamClick(chapter.designation);
                      }}
                    />
                  );
                })}
              </Row>
            </div>
          ) : null}
          {execTeam ? (
            <div className="mt-5 execTeam">
              <h3>Leadership Team</h3>
              <Row className="justify-content-around">
                {execLeadershipTeamInfo.map((member, index) => {
                  return (
                    <ReactCardFlip
                      isFlipped={member.isFlipped}
                      flipDirection="vertical"
                      containerStyle={{ width: "350px" }}>
                      <div className="box-shadow-list-team-card text-center mt-3">
                        <Image
                          roundedCircle
                          src={member.img}
                          className="mt-3"
                        />
                        <h5>
                          {member.first_name} {member.last_name} <hr />
                          {member.role}
                        </h5>
                        <Button
                          className="mt-3"
                          variant="outline-dark w-75"
                          onClick={() => {
                            member.setFunc(true);
                          }}>
                          Read Bio
                        </Button>
                        <Button
                          className="mt-3"
                          variant="outline-dark w-75"
                          onClick={() => {
                            window.open(`${member.linkedin}`, "_blank");
                          }}>
                          LinkedIn
                        </Button>
                      </div>
                      <div className="box-shadow-list-team-card text-center">
                        <Image
                          roundedCircle
                          src={member.img}
                          className="mt-3 flip-card-img"
                        />
                        <h5>{member.first_name}'s Bio</h5>
                        <p>{displayBio(member)}</p>
                        {member.adjusted_bio ? (
                          <Button
                            variant="dark"
                            onClick={(e) => {
                              e.preventDefault();
                              setModalData(member);
                              setShow(true);
                            }}>
                            Read More
                          </Button>
                        ) : null}
                        <Button
                          className="mt-3"
                          variant="outline-dark w-75"
                          onClick={() => {
                            member.setFunc(false);
                          }}>
                          Done Reading Bio
                        </Button>
                      </div>
                    </ReactCardFlip>
                  );
                })}
              </Row>
              <hr />
              <h3>Executive Team</h3>
              <Row className="justify-content-around">
                {execTeamInfo.map((member, index) => {
                  return (
                    <div className="box-shadow-list-team-card text-center mt-3">
                      <Image roundedCircle src={member.img} className="mt-3" />
                      <h5>
                        {member.first_name} {member.last_name} <hr />
                        {member.role}
                      </h5>
                      <Button
                        className="mt-3"
                        variant="outline-dark w-75"
                        onClick={() => {
                          window.open(`${member.linkedin}`, "_blank");
                        }}>
                        LinkedIn
                      </Button>
                    </div>
                  );
                })}
              </Row>
            </div>
          ) : null}
          {macTeam ? (
            <div className="mt-5">
              <Row className="justify-content-around">
                {mcmasterTeamInfo.map((member, index) => {
                  return (
                    <div className="box-shadow-list-team-card text-center mt-3">
                      <Image roundedCircle src={member.img} className="mt-3" />
                      <h5>
                        {member.first_name} {member.last_name} <hr />
                        {member.role}
                      </h5>
                      <Button
                        className="mt-3"
                        variant="outline-dark w-75"
                        onClick={() => {
                          window.open(`${member.linkedin}`, "_blank");
                        }}>
                        LinkedIn
                      </Button>
                    </div>
                  );
                })}
              </Row>
            </div>
          ) : null}
          {queenTeam ? (
            <div className="mt-5">
              <Row className="justify-content-around">
                {queenTeamInfo.map((member, index) => {
                  return (
                    <div className="box-shadow-list-team-card text-center mt-3">
                      <Image roundedCircle src={member.img} className="mt-3" />
                      <h5>
                        {member.first_name} {member.last_name} <hr />
                        {member.role}
                      </h5>
                      <Button
                        className="mt-3"
                        variant="outline-dark w-75"
                        onClick={() => {
                          window.open(`${member.linkedin}`, "_blank");
                        }}>
                        LinkedIn
                      </Button>
                    </div>
                  );
                })}
              </Row>
            </div>
          ) : null}
          {tmuTeam ? (
            <div className="mt-5">
              <Row className="justify-content-around">
                {tmuTeamInfo.map((member, index) => {
                  return (
                    <div className="box-shadow-list-team-card text-center mt-3">
                      <Image roundedCircle src={member.img} className="mt-3" />
                      <h5>
                        {member.first_name} {member.last_name} <hr />
                        {member.role}
                      </h5>
                      <Button
                        className="mt-3"
                        variant="outline-dark w-75"
                        onClick={() => {
                          window.open(`${member.linkedin}`, "_blank");
                        }}>
                        LinkedIn
                      </Button>
                    </div>
                  );
                })}
              </Row>
            </div>
          ) : null}
          {uooTeam ? (
            <div className="mt-5">
              <Row className="justify-content-around">
                {uOttawaTeamInfo.map((member, index) => {
                  return (
                    <div className="box-shadow-list-team-card text-center mt-3">
                      <Image roundedCircle src={member.img} className="mt-3" />
                      <h5>
                        {member.first_name} {member.last_name} <hr />
                        {member.role}
                      </h5>
                      <Button
                        className="mt-3"
                        variant="outline-dark w-75"
                        onClick={() => {
                          window.open(`${member.linkedin}`, "_blank");
                        }}>
                        LinkedIn
                      </Button>
                    </div>
                  );
                })}
              </Row>
            </div>
          ) : null}
          {yorkTeam ? (
            <div className="mt-5">
              <Row className="justify-content-around">
                {yorkTeamInfo.map((member, index) => {
                  return (
                    <div className="box-shadow-list-team-card text-center mt-3">
                      <Image roundedCircle src={member.img} className="mt-3" />
                      <h5>
                        {member.first_name} {member.last_name} <hr />
                        {member.role}
                      </h5>
                      <Button
                        className="mt-3"
                        variant="outline-dark w-75"
                        onClick={() => {
                          window.open(`${member.linkedin}`, "_blank");
                        }}>
                        LinkedIn
                      </Button>
                    </div>
                  );
                })}
              </Row>
            </div>
          ) : null}
          {laurierTeam ? (
            <div className="mt-5">
              <Row className="justify-content-around">
                {laurierTeamInfo.map((member, index) => {
                  return (
                    <div className="box-shadow-list-team-card text-center mt-3">
                      <Image roundedCircle src={member.img} className="mt-3" />
                      <h5>
                        {member.first_name} {member.last_name} <hr />
                        {member.role}
                      </h5>
                      <Button
                        className="mt-3"
                        variant="outline-dark w-75"
                        onClick={() => {
                          window.open(`${member.linkedin}`, "_blank");
                        }}>
                        LinkedIn
                      </Button>
                    </div>
                  );
                })}
              </Row>
            </div>
          ) : null}
          {westernTeam ? (
            <div className="mt-5">
              <Row className="justify-content-around">
                {uwoTeamInfo.map((member, index) => {
                  return (
                    <div className="box-shadow-list-team-card text-center mt-3">
                      <Image roundedCircle src={member.img} className="mt-3" />
                      <h5>
                        {member.first_name} {member.last_name} <hr />
                        {member.role}
                      </h5>
                      <Button
                        className="mt-3"
                        variant="outline-dark w-75"
                        onClick={() => {
                          window.open(`${member.linkedin}`, "_blank");
                        }}>
                        LinkedIn
                      </Button>
                    </div>
                  );
                })}
              </Row>
            </div>
          ) : null}
          {ubcTeam ? (
            <div className="mt-5">
              <Row className="justify-content-around">
                {ubcTeamInfo.map((member, index) => {
                  return (
                    <div className="box-shadow-list-team-card text-center mt-3">
                      <Image roundedCircle src={member.img} className="mt-3" />
                      <h5>
                        {member.first_name} {member.last_name} <hr />
                        {member.role}
                      </h5>
                      <Button
                        className="mt-3"
                        variant="outline-dark w-75"
                        onClick={() => {
                          window.open(`${member.linkedin}`, "_blank");
                        }}>
                        LinkedIn
                      </Button>
                    </div>
                  );
                })}
              </Row>
            </div>
          ) : null}
          {uftTeam ? (
            <div className="mt-5">
              <Row className="justify-content-around">
                {uftTeamInfo.map((member, index) => {
                  return (
                    <div className="box-shadow-list-team-card text-center mt-3">
                      <Image roundedCircle src={member.img} className="mt-3" />
                      <h5>
                        {member.first_name} {member.last_name} <hr />
                        {member.role}
                      </h5>
                      <Button
                        className="mt-3"
                        variant="outline-dark w-75"
                        onClick={() => {
                          window.open(`${member.linkedin}`, "_blank");
                        }}>
                        LinkedIn
                      </Button>
                    </div>
                  );
                })}
              </Row>
            </div>
          ) : null}
          {uwTeam ? (
            <div className="mt-5">
              <Row className="justify-content-around">
                {uwTeamInfo.map((member, index) => {
                  return (
                    <div className="box-shadow-list-team-card text-center mt-3">
                      <Image roundedCircle src={member.img} className="mt-3" />
                      <h5>
                        {member.first_name} {member.last_name} <hr />
                        {member.role}
                      </h5>
                      <Button
                        className="mt-3"
                        variant="outline-dark w-75"
                        onClick={() => {
                          window.open(`${member.linkedin}`, "_blank");
                        }}>
                        LinkedIn
                      </Button>
                    </div>
                  );
                })}
              </Row>
            </div>
          ) : null}
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Teams_Page;
