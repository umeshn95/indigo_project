import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import exploreallproject from "../images/explore__all__project.png";
import top10find from "../images/top__10__find.png";
import teamfavourite from "../images/team__favourites.png";
import indemandstars from "../images/indemand__stars.png";
import jointheconvo from "../images/join__the__convo.png";
import brand_name from "../images/brand_name.PNG";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from '@material-ui/icons/Close';
function Navbardata() {
  const test = () => {
    document
      .getElementById("explore__dropdown")
      .classList.toggle("hide__content");
    
  };
  const searchclick = ()=>{
    document
      .getElementById("search__bar")
      .classList.toggle("hide__content");
  }
  const closeicon =() =>{
      document.getElementById('search__bar').className='hide__content'
  }
  return (
    <div className="navlabar">
      <div className="brand_name_logo">
        <Link to="/">
          <img src={brand_name} alt="brand_logo" />
        </Link>
      </div>
      <div className="dropdown">
        <div>
          <div id="explore__dropdown" className=" hide__ani hide__content">
            <div className="explore__all__project">
              <img src={exploreallproject}></img>
            </div>
            <div className="explore__top__10__find">
              <img src={top10find}></img>
            </div>
            <div className="explore__teamfavourite">
              <img src={teamfavourite}></img>
            </div>
            <div className="explore__indemandstars">
              <img src={indemandstars}></img>
            </div>
            <div className="explore__jointheconvo">
              <img src={jointheconvo}></img>
            </div>
            <div className="tech">
              <p className="tech__innovation">TECH & INNOVATION</p>
            </div>
            <div className="explore__audio">
              <p className="audio">Audio</p>{" "}
            </div>
            <div className="explore__camera">
              <p className="camera__gear">Camera Gear</p>
            </div>
            <div className="explore__education">
              <p className="education">Education</p>
            </div>
            <div className="explore__energy">
              <p className="energy">Energy & Green Tech</p>
            </div>
            <div className="explore__fashion">
              <p className="fashion">Fashion & Wearables</p>
            </div>
            <div className="explore__food">
              <p className="food">Food & Beverages</p>
            </div>
            <div className="explore__health">
              <p className="health">Health & Fitness</p>
            </div>
            <div className="explore__home">
              <p className="home">Home</p>
            </div>
            <div className="explore__phone">
              <p className="phone">Phones & Accessories</p>
            </div>
            <div className="explore__productivity">
              <p className="productivity">Productivity</p>
            </div>
            <div className="explore__transportation">
              <p className="transportation">Transportation</p>
            </div>
            <div className="explore__travel">
              <p className="travel">Travel & Outdoors</p>
            </div>
            <div className="explore__creative">
              <p className="creative">CREATIVE WORKS</p>
            </div>
            <div className="explore__art">
              <p className="art">Art</p>
            </div>
            <div className="explore__comics">
              <p className="comics">Comics</p>
            </div>
            <div className="explore__dance">
              <p className="dance">Dance & Theater</p>
            </div>
            <div className="explore__film">
              <p className="film">Film</p>
            </div>
            <div className="explore__music">
              <p className="music">Music</p>
            </div>
            <div className="explore__photography">
              <p className="photography">Photography</p>
            </div>
            <div className="explore__podcast">
              <p className="podcast">Podcasts, Blogs & Vlogs</p>
            </div>
            <div className="explore__tabletop">
              <p className="tabletop">Tabletop Games</p>
            </div>
            <div className="explore__video">
              <p className="video">Video Games</p>
            </div>
            <div className="explore__web">
              <p className="web">Web Series & TV Shows</p>
            </div>
            <div className="explore__writing">
              <p className="writing">Writing & Publishing</p>
            </div>
            <div className="explore__community">
              <p className="community">COMMUNITY PROJECTS</p>
            </div>
            <div className="explore__culture">
              <p className="culture">Culture</p>
            </div>
            <div className="explore__environment">
              <p className="environment">Environment</p>
            </div>
            <div className="explore__human">
              <p className="human">Human Rights</p>
            </div>
            <div className="explore__local">
              <p className="local">Local Businesses</p>
            </div>
            <div className="explore__wellness">
              <p className="wellness">Wellness</p>
            </div>
          </div>
        </div>
        <div className="explore" onClick={test}>
          Explore
        </div>
        <div className="arrow" onClick={test} >
          <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        </div>

        <Link to="whatwe">
          <div className="do">What We Do</div>
        </Link>
        <div className="search_icon" onClick={searchclick}>
          <SearchIcon></SearchIcon>
        </div>
        <div className="ep">For Enterpreneurs</div>
        <Link to='/startcampaign'><div className="camp">Start a Campaign</div></Link>
        <div className="line"></div>
        <div className="login">Login</div>
        <div className="signup">Signup</div>
      </div>
      <div className='hide__content' id='search__bar'> <div className='search__icon2'><SearchIcon></SearchIcon></div><div className='close__icon' onClick={closeicon}><CloseIcon></CloseIcon></div><input type='text' placeholder='Search' className='search__dimension'></input></div>
    </div>
  );
}

export default Navbardata;
