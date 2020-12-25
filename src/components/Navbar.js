import React from "react";
import "./Navbar.css";
import brand_name from "../images/brand_name.PNG";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import SearchIcon from "@material-ui/icons/Search";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";
import exploreallproject from "../images/explore__all__project.png";
import top10find from "../images/top__10__find.png";
import teamfavourite from "../images/team__favourites.png";
import indemandstars from "../images/indemand__stars.png";
import jointheconvo from "../images/join__the__convo.png";
import Navbardata from "./Navbardata";

function Navbar() {
  return (
    <div>
      <Navbardata />
      <Carousel
        climber1="CLMBR The Most Efficient Cardio & Strength Machine"
        climber2="Blackview BL6000 Pro: The Toughest 5G Rugged Phone"
        climber3="Between Pro: The best-sounding wireless earbuds."
        climber4="Polaris 4K UHD Ultra Short Throw Laser TV"
        text1="Burn 60% more calorie than running,rowing & bike"
        text2="Fastest, Best Camera Outdoor Smarthone (5G) For a"
        text3="World-first triple driver earbuds. Industry-leading"
        text4="Full Color Laser | 4KUHD | 2500 ANSI Lumens"
        content1="workouts.Climb to get fit,strong,tonned muscles."
        content2="Truly Fun, and Portable Adventurer Experience!"
        content3="battery life, technology & ergonomics."
        content4="|Project up to 200' Screen | 30000h of Use | Low Noise"
      />
    </div>
  );
}

export default Navbar;
