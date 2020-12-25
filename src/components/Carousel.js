import React, { useState } from "react";
import cardio from "../images/cardio.png";
import earphone from "../images/earphonee.png";
import phone from "../images/phone.png";
import lasertv from "../images/lasrtv.png";
import "./Carousel.css";
import Signupdiv from "./Popularprojectcard";
import Popularprojectcard from "./Popularprojectcard";
import collie from "../images/Collie.png";
import edeskhub from "../images/edeskhub.jpg";
import xkit from "../images/xkit.jpg";
import atom2 from "../images/atom2.jpg";
import incharge from "../images/incharge.jpg";
import street from "../images/street.jpg";
import ciga from "../images/ciga.jpg";
import cocktail from "../images/cocktail";
import amber from "../images/amber.jpg";
import shi from "../images/shi.jpg";
import wireless from "../images/wireless.jpg";
import oyeet from "../images/oyeet.jpg";
import stoggles from "../images/stoggles.png";
import zumy from "../images/zumy.png";
import friday from "../images/friday.jpg";
import olivepro from "../images/olivepro.jpg";
import christ from "../images/christ.jpg";
import breathe from "../images/breathe.jpg";
import full from "../images/full.jpg";
import machines from "../images/machines.jpg";
import Teamfav from "./Teamfav";
import coolfind from "../images/coolfind.png";
import teamfav from "../images/teamfav.png";
import indemand from "../images/indemand.png";
import join from "../images/join.png";
import backproject from "../images/back_project.png";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import homeimg from "../images/home.png";
import mobile__acc from "../images/mobile__accessories.png";
import bag from "../images/bag.png";
import health from "../images/health__fitness.png";
import audio from "../images/audio.png";
import film from "../images/film.png";
import electric from "../images/electric__gokart.png";
import ufo from "../images/ufo.png";
import box from "../images/smart__boxing.png";
import clever from "../images/clever.png";
import Footer from "./Footer";

function Carousel(props) {
  const image = [cardio, phone, earphone, lasertv];
  const feature = [
    props.climber1,
    props.climber2,
    props.climber3,
    props.climber4,
  ];
  const text = [props.text1, props.text2, props.text3, props.text4];
  const content = [
    props.content1,
    props.content2,
    props.content3,
    props.content4,
  ];
  const popularcard = {};

  const [inc, setInc] = useState(0);
  const [sliderbtn, SetSliderbtn] = useState(1);
  console.log(props.climber);
  // props.climber = "updated";
  // console.log(props.climber);
  const handleClickf = () => {
    if (inc < 3) {
      setInc(inc + 1);
    } else {
      setInc(0);
    }
  };
  const handleClickb = () => {
    if (inc !== 0) {
      setInc(inc - 1);
    } else {
      setInc(inc + 3);
    }
  };
  const handleClickcardr = () => {
    if (sliderbtn <= 4) {
      SetSliderbtn(sliderbtn + 1);
      document.getElementById("s1").className = `slider${sliderbtn}`;
    }
    //  else {
    //   // SetSliderbtn(sliderbtn - 1);
    // }
  };
  const handleClickcardl = () => {
    // if (sliderbtn == 5) {
    //   SetSliderbtn(4);
    // }
    if (sliderbtn > 1 && sliderbtn < 6) {
      SetSliderbtn(sliderbtn - 1);

      if (`slider${sliderbtn}` == "slider2") {
        document.getElementById("s1").className = "slider8";
      }
      if (`slider${sliderbtn}` == "slider3") {
        document.getElementById("s1").className = "slider7";
      }
      if (`slider${sliderbtn}` == "slider4") {
        document.getElementById("s1").className = "slider6";
      }
      if (`slider${sliderbtn}` == "slider5") {
        document.getElementById("s1").className = "slider5";
      }
    }
  };
  return (
    <div>
     
      <div className="imag">
        <img src={image[inc]} alt="no_image" className="cardio" id="pic"></img>
        <div className="slider">
          <div onClick={handleClickb} className="b">
            <i className="arrows left bg"></i>
          </div>

          <div onClick={handleClickf} className="f">
            <i className="arrows right bg"></i>
          </div>

          <div className="circle1" onClick={handleClickb} id="c1"></div>
          <div className="circle2" onClick={handleClickf} id="c2"></div>
          <div className="range">
            <p className="change">{inc + 1}/4</p>
            <div className="featured">
              <p className="feature">FEATURED</p>
              <div className="climber">
                <b>{feature[inc]}</b>
                <br />
                <p className="text__content">
                  {text[inc]} <br />
                  {content[inc]}
                </p>
                <p className="see__campaign">SEE CAMPAIGN</p>
              </div>
              <div className="signupdiv">
                <div className="find">
                  Find it first on Indiegogo.
                  <br />
                  <p className="find__content">
                    Indiegogo is where early adopters and innovation seekers
                    find
                    <br /> lively, imaginative tech before it hits the
                    mainstream.
                  </p>
                </div>
                <div className="signupbtn">
                  <button className="signup__button">
                    <b>SIGN UP NOW </b>
                  </button>
                  <button className="learnmore__button">
                    <b>LEARN MORE </b>
                  </button>
                </div>
                <div className="popular__projects">
                  <div className="popularprojects__heading">
                    <h1>Popular Projects</h1>

                    <div className="card__slider">
                      <div onClick={handleClickcardl} className="b">
                        <i className="arrows left bg"></i>
                      </div>

                      <div onClick={handleClickcardr} className="f">
                        <i className="arrows right bg"></i>
                      </div>

                      <div
                        className="circle1"
                        onClick={handleClickcardl}
                        id="c1"></div>
                      <div
                        className="circle2"
                        onClick={handleClickcardr}
                        id="c2"></div>
                    </div>
                  </div>
                
                  <div className="sliderx" id="s1">
                    <figure className="figure1">
                      <div className="card__component1">
                        <Popularprojectcard
                          imgsrc={collie}
                          card_heading="Meross Collie: Smart Garage Door Opener Controller"
                          card_content1="World’s smartest stand-alone garage door "
                          card_content2="controller supports Apple HomeKit, Alexa and Google Home."
                          card_category="Home"
                        />
                      </div>
                      <div className="card_component2">
                        <Popularprojectcard
                          imgsrc={edeskhub}
                          card_heading="Edeskhub: The Best Smart Desk for Healthy Working."
                          card_content1="700mm Adjustable Height | Wireless Charging "
                          card_content2="100W Power Delivery Hub | Relax While at Work."
                          card_category="Home"
                        />
                      </div>
                      <div className="card_component2">
                        <Popularprojectcard
                          imgsrc={xkit}
                          card_heading="X-Kit: World's First Ergonomic Foldable Hub-Stand"
                          card_content1="5-in-1 USB-C Hub | 4 Adjustable Angles | 4K HDMI"
                          card_content2="USB 3.0 | SD & TF | Work Different with UGREEN."
                          card_category="Productivity"
                        />
                      </div>
                      <div className="card_component2">
                        <Popularprojectcard
                          imgsrc={atom2}
                          card_heading="ATOM 2: The World's 1st Auto-foldable Phone Gimbal"
                          card_content1="Revolutionary 3-axis stabilizer with auto-folding"
                          card_content2="tripod stand, AI smart tracking...."
                          card_category="Phone and accessories"
                        />
                      </div>
                      <div className="card_component2">
                        <Popularprojectcard
                          imgsrc={incharge}
                          card_heading="inCharge X - The 100W Swiss Army Knife of Cables"
                          card_content1="The most crowdfunded cable EVER is back! Tiny "
                          card_content2="Universal, Ultra Powerful keyring cable."
                          card_category="Phone and accessories"
                        />
                      </div>
                      <div className="card_component2">
                        <Popularprojectcard
                          imgsrc={street}
                          card_heading="Street Masters: Tide of the Dragon"
                          card_content1="A standalone expansion to Street Masters "
                          card_content2="the game of street brawling action for 1-4 players!."
                          card_category="Tabletop games"
                        />
                      </div>
                      <div className="card_component2">
                        <Popularprojectcard
                          imgsrc={ciga}
                          card_heading="CIGA Design X Series Mechanical Watch"
                          card_content1="World's first hollow-design masterpiece with "
                          card_content2="incredible X design and innovative suspension system."
                          card_category="Fashion and Wearables"
                        />
                      </div>
                      <div className="card_component2">
                        <Popularprojectcard
                          imgsrc={cocktail}
                          card_heading="The Elevated Craft Cocktail Shaker"
                          card_content1="Innovative tool for every home bar. Vacuum"
                          card_content2="insulated with a patented measuring system and more."
                          card_category="Food and beverages"
                        />
                      </div>
                      <div className="card_component2">
                        <Popularprojectcard
                          imgsrc={amber}
                          card_heading="Amber X: The Privacy-First Smart Personal Cloud"
                          card_content1="Store your data locally and access it from anywhere "
                          card_content2="with this smart personal cloud device."
                          card_category="Home"
                        />
                      </div>
                      <div className="card_component2">
                        <Popularprojectcard
                          imgsrc={shi}
                          card_heading="SHI: HAIKYO"
                          card_content1="SHI is back with the sequel to Return of the Warrior "
                          card_content2="in an all new graphic novel, HAIKYO!."
                          card_category="Comics"
                        />
                      </div>
                      <div className="card_component2">
                        <Popularprojectcard
                          imgsrc={wireless}
                          card_heading="AAWireless"
                          card_content1="Bring wireless Android Auto connection to your car "
                          card_content2=""
                          card_category="Phone and accessories"
                        />
                      </div>
                      <div className="card_component2">
                        <Popularprojectcard
                          imgsrc={oyeet}
                          card_heading="OYeet NEX:The Most Powerful & Portable Massage Gun"
                          card_content1="Deep Tissue Muscle Recovery, Anytime & Anywhere "
                          card_content2=" 40lbs Force | 3500 PPM Speed | Ultra-Portable."
                          card_category="Health and fitness"
                        />
                      </div>
                      <div className="card_component2">
                        <Popularprojectcard
                          imgsrc={stoggles}
                          card_heading="Stoggles : Stylish Protection For Your Eyes"
                          card_content1="Protects from dirty fingers & airborne droplets: blue "
                          card_content2="light filter + light responsive + Rx friendly  ."
                          card_category="Fashion and wearables"
                        />
                      </div>
                      <div className="card_component2">
                        <Popularprojectcard
                          imgsrc={zumy}
                          card_heading="Zumy: Pro Studio Quality Light For Video Meetingsr"
                          card_content1="The portable, clip-on light to help you look brilliant in "
                          card_content2="Zoom meetings, videos, and pics."
                          card_category="Home"
                        />
                      </div>
                      <div className="card_component2">
                        <Popularprojectcard
                          imgsrc={friday}
                          card_heading="Collector's Black Friday & Holiday Extravaganza!"
                          card_content1="Get all the collectible bargains you want for the "
                          card_content2="holidays in one place!"
                          card_category="comics"
                        />
                      </div>
                      <div className="card_component2">
                        <Popularprojectcard
                          imgsrc={olivepro}
                          card_heading="Olive Pro: 2-in-1 Hearing Aids & Bluetooth Earbuds"
                          card_content1="Enhanced Hearing for Sounds, Music and "
                          card_content2="Conversations. Affordable Hearing for All."
                          card_category="Audio"
                        />
                      </div>
                      <div className="card_component2">
                        <Popularprojectcard
                          imgsrc={christ}
                          card_heading="Christmas for the Grosvenor Family"
                          card_content1="Donate to give the Grosvenor's a Christmas to "
                          card_content2="Remember!."
                          card_category="Community project"
                        />
                      </div>
                      <div className="card_component2">
                        <Popularprojectcard
                          imgsrc={breathe}
                          card_heading="Support Breathe Parkour"
                          card_content1="Help us stay afloat during these second round of "
                          card_content2="COVID-19 closures."
                          card_category="Local Business"
                        />
                      </div>
                      <div className="card_component2">
                        <Popularprojectcard
                          imgsrc={full}
                          card_heading="09's First Full Length Album"
                          card_content1="Featuring Kellin Quinn, Matty Mullins, Rory "
                          card_content2="Rodriguez, & Cove Reber."
                          card_category="Music"
                        />
                      </div>
                      <div className="card_component2">
                        <Popularprojectcard
                          imgsrc={machines}
                          card_heading="REPLICATOR 3: Mutants vs Machines"
                          card_content1="With England on the brink of annihilation,"
                          card_content2="corporations battle for control. Mutants vs Machines"
                          card_category="Comics"
                        />
                      </div>
                    </figure>
                  </div>

                  <div className="coolfind__carousel">
                    <Teamfav imgsrc={coolfind} sc="SEE COLLECTION" />
                  </div>
                  <div className="teamfav__carousel">
                    <Teamfav imgsrc={teamfav} sc="SEE COLLECTION" />
                  </div>
                  <div className="indemand__carousel">
                    <Teamfav imgsrc={indemand} sc="SEE COLLECTION" />
                  </div>
                  <div className="join__carousel">
                    <Teamfav imgsrc={join} sc="SEE COLLECTION" />
                  </div>
                  <div className="back__project">
                    <img src={backproject}></img>
                    <div className="learn__crowdfunding">
                      LEARN ABOUT CROWDFUNDING
                      <div className="afi">
                        <ArrowForwardIosIcon />
                      </div>
                    </div>
                    <div className="interest__category">
                      Which categories interest you?
                    </div>
                    <div className="discover__project">
                      Discover projects just for you and get great
                      recommendations when you select your interests.
                    </div>
                    <div className="select__interest">
                      {" "}
                      <button className="select__interest__btn">
                        SIGN UP AND SELECT INTERESTS
                      </button>{" "}
                    </div>
                    <div className="explore__categories">
                      Or explore our top categories
                    </div>
                    <div className="home__image">
                      <img src={homeimg}></img>
                    </div>
                    <div className="home__image__name">HOME</div>
                    <div className="mobile__acc">
                      <img src={mobile__acc}></img>
                    </div>
                    <div className="mobile__acc__name">
                      PHONES & ACCESSORIES
                    </div>
                    <div className="bag">
                      <img src={bag}></img>
                    </div>
                    <div className="bag__name"> TRAVEL & OUTDOORS </div>
                    <div className="health">
                      <img src={health}></img>
                    </div>
                    <div className="health__name"> HEALTHG & FITNESS</div>
                    <div className="audio">
                      <img src={audio}></img>
                    </div>
                    <div className="audio__name">AUDIO</div>
                    <div className="film">
                      <img src={film}></img>
                    </div>
                    <div className="film__name">FILM</div>
                    <div className="journal">From the Journal</div>
                    <div className="behind__project">
                      Your behind-the-scenes view of the people and stories
                      behind Indiegogo projects
                    </div>
                    <div className="electric">
                      <img src={electric}></img>
                    </div>

                    <div className="ufo">
                      <img src={ufo}></img>
                    </div>

                    <div className="box">
                      <img src={box}></img>
                    </div>
                    <div className="electric__gokart">
                      The All-New Electric Gokart, Powered by Segway<br></br>
                      <br></br>
                      <p className="leelu">
                        Segway-Ninebot has delighted Indiegogo backers<br></br>{" "}
                        over the years with a slew of amazing projects..
                      </p>
                    </div>
                    <div className="ufo__desc">
                      {" "}
                      The Story of the Million Dollar UFO<br></br>
                      <br></br>
                      <p className="leelu">
                        The Flynova Pro is a toy that’s so out of this world,
                        <br></br> you’ll think it was from, well, out of this
                        world..
                      </p>
                    </div>
                    <div className="boxing">
                      Get Moving with Move It Swift<br></br>
                      <br></br>
                      <p className="leelu">
                        Learn more about the team behind the smart boxing gloves
                        <br></br> that will change your workout routine
                      </p>
                    </div>
                    <div className="clever">
                      {" "}
                      <img src={clever}></img>
                    </div>
                    <div className="signup__bottom">
                      <button className="signup__button">
                        <b>SIGN UP NOW </b>
                      </button>
                      <button className="learnmore__button">
                        <b>LEARN MORE </b>
                      </button>
                    </div>
                    <div>
                      <Footer></Footer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
