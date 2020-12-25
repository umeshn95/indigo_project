import React from "react";
import "./Footer.css";
import mail from "../images/mail.png";
import rupee from "../images/rupee-indian.jpg";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import business from "../images/acc__business.png";

function Footer() {
  return (
    <div className="footer">
      {/* <div className='line'></div> */}
      <div className="cu">
        <button
          className="currrency__setting"
          style={{
            backgroundColor: "white",
            height: 40 + "px",
            width: 210 + "px",
            borderColor: "#f4f4f2",
          }}>
          <img
            src={rupee}
            style={{
              height: 12 + "px",
              width: 12 + "px",
              marginRight: 5 + "px",
            }}></img>
          Indian Rupee
        </button>
        <div className="facebook__icon">
          <FacebookIcon></FacebookIcon>
        </div>
        <div className="twitter__icon">
          <TwitterIcon></TwitterIcon>
        </div>
        <div className="youtube__icon">
          <YouTubeIcon></YouTubeIcon>
        </div>
        <div className="insta__icon">
          <InstagramIcon></InstagramIcon>
        </div>
        <div className="linkedin__icon">
          <LinkedInIcon></LinkedInIcon>
        </div>
      </div>
      <div classname="">
        <p
          className="explore__footer"
          style={{
            marginLeft: 171 + "px",
            fontWeight: "lighter",
            marginTop: 75 + "px",
            position: "absolute",
            fontSize: 20 + "px",
          }}>
          Explore
        </p>
      </div>
      <div>
        <p
          classname="do__footer"
          style={{
            marginLeft: 171 + "px",
            fontWeight: "lighter",
            marginTop: 110 + "px",
            position: "absolute",
            fontSize: 15 + "px",
          }}>
          What We Do
        </p>
      </div>
      <div>
        <p
          classname="funding__footer"
          style={{
            marginLeft: 171 + "px",
            fontWeight: "lighter",
            marginTop: 130 + "px",
            position: "absolute",
            fontSize: 15 + "px",
          }}>
          Funding
        </p>
      </div>
      <div>
        <p
          classname="fundme__footer"
          style={{
            marginLeft: 171 + "px",
            fontWeight: "lighter",
            marginTop: 150 + "px",
            position: "absolute",
            fontSize: 15 + "px",
          }}>
          GoFundMe
        </p>
      </div>
      <div>
        <p
          classname="about__footer"
          style={{
            marginLeft: 456 + "px",
            fontWeight: "lighter",
            marginTop: 75 + "px",
            position: "absolute",
            fontSize: 18 + "px",
          }}>
          ABOUT
        </p>
      </div>
      <div>
        <p
          classname="aboutus__footer"
          style={{
            marginLeft: 456 + "px",
            fontWeight: "lighter",
            marginTop: 110 + "px",
            position: "absolute",
            fontSize: 15 + "px",
          }}>
          About Us
        </p>
      </div>
      <div>
        <p
          classname="blog__footer"
          style={{
            marginLeft: 456 + "px",
            fontWeight: "lighter",
            marginTop: 130 + "px",
            position: "absolute",
            fontSize: 15 + "px",
          }}>
          Blog
        </p>
      </div>
      <div>
        <p
          classname="trust__footer"
          style={{
            marginLeft: 456 + "px",
            fontWeight: "lighter",
            marginTop: 150 + "px",
            position: "absolute",
            fontSize: 15 + "px",
          }}>
          Trust & Safety
        </p>{" "}
      </div>
      <div>
        <p
          classname="help__footer"
          style={{
            marginLeft: 456 + "px",
            fontWeight: "lighter",
            marginTop: 170 + "px",
            position: "absolute",
            fontSize: 15 + "px",
          }}>
          Help & Support
        </p>
      </div>
      <div>
        <p
          classname="press__footer"
          style={{
            marginLeft: 456 + "px",
            fontWeight: "lighter",
            marginTop: 190 + "px",
            position: "absolute",
            fontSize: 15 + "px",
          }}>
          Press
        </p>
      </div>
      <div>
        <p
          classname="career__footer"
          style={{
            marginLeft: 456 + "px",
            fontWeight: "lighter",
            marginTop: 210 + "px",
            position: "absolute",
            fontSize: 15 + "px",
          }}>
          Careers
        </p>
      </div>
      <div>
        <p
          classname="contact__footer"
          style={{
            marginLeft: 456 + "px",
            fontWeight: "lighter",
            marginTop: 230 + "px",
            position: "absolute",
            fontSize: 15 + "px",
          }}>
          Contact
        </p>
      </div>
      <div>
        <p
          className="enterpreneurs__footer"
          style={{
            marginLeft: 737 + "px",
            fontWeight: "lighter",
            marginTop: 75 + "px",
            position: "absolute",
            fontSize: 18 + "px",
          }}>
          ENTREPRENEURS
        </p>
      </div>
      <div>
        <p
          classname="how__footer"
          style={{
            marginLeft: 737 + "px",
            fontWeight: "lighter",
            marginTop: 110 + "px",
            position: "absolute",
            fontSize: 15 + "px",
          }}>
          How It Works
        </p>
      </div>
      <div>
        <p
          classname="indigo__footer"
          style={{
            marginLeft: 737 + "px",
            fontWeight: "lighter",
            marginTop: 130 + "px",
            position: "absolute",
            fontSize: 15 + "px",
          }}>
          Indiegogo vs. Kickstarter
        </p>
      </div>
      <div>
        <p
          classname="education__footer"
          style={{
            marginLeft: 737 + "px",
            fontWeight: "lighter",
            marginTop: 150 + "px",
            position: "absolute",
            fontSize: 15 + "px",
          }}>
          Education Center
        </p>
      </div>
      <div>
        <p
          classname="expert__footer"
          style={{
            marginLeft: 737 + "px",
            fontWeight: "lighter",
            marginTop: 170 + "px",
            position: "absolute",
            fontSize: 15 + "px",
          }}>
          Experts Directory
        </p>
      </div>
      <div>
        <p
          classname="fees__footer"
          style={{
            marginLeft: 737 + "px",
            fontWeight: "lighter",
            marginTop: 190 + "px",
            position: "absolute",
            fontSize: 15 + "px",
          }}>
          Fees
        </p>
      </div>
      <div>
        <p
          classname="enterprise__footer"
          style={{
            marginLeft: 737 + "px",
            fontWeight: "lighter",
            marginTop: 210 + "px",
            position: "absolute",
            fontSize: 15 + "px",
          }}>
          Enterprise
        </p>
      </div>
      <div>
        <p
          classname="china__footer"
          style={{
            marginLeft: 737 + "px",
            fontWeight: "lighter",
            marginTop: 230 + "px",
            position: "absolute",
            fontSize: 15 + "px",
          }}>
          China
        </p>
        <div className="mail">
          <img src={mail}></img>
        </div>
        <div className="input__email">
          <input
            placeholder="Your email address"
            type="text"
            style={{ height: 40 + "px", width: 290 + "px" }}
            className="input__mail"></input>
        </div>
      </div>
      <div className="check__box">
        <input type="checkbox" id="signup" name="signup" value="condition" />
        <label
          for="signup"
          style={{ fontSize: 15 + "px", fontWeight: "lighter" }}>
          I agree to the Terms of Use and have <br></br>read and understand the
          Privacy Policy
        </label>
        <div className="">
          <button className="sign__me__up">SIGN ME UP</button>
        </div>
      </div>
      <div className="business">
        <img src={business}></img>
      </div>
      <div className="term">Terms of Use</div>
      <div className="privacy__policy">Privacy Policy</div>
      <div className="cookie__policy">Cookie Policy</div>
      <div className="personal__information">Do Not Sell My Personal Information</div>
      <div className="right__reserved">© 2020 Indiegogo, Inc. All Rights Reserved</div>



    </div>
  );
}

export default Footer;
