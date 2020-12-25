import React from "react";
import collie from "../images/Collie.png";

import "./Popularprojectcard.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function Popularprojectcard(props) {

  console.log(props.imgsrc);
  return (
    <div className="card">
      <img src={props.imgsrc} alt ="cool"className="collie"></img>
      <div className="funding">
        <p>FUNDING</p>
      </div>
      <div className="heart">
        <FavoriteBorderIcon />
      </div>
      <div className="card__heading">{props.card_heading}</div>
      <div className="card__content">
        {props.card_content1} <br />
        {props.card_content2}
      </div>
      <div className="category">{props.card_category}</div>
    </div>
  );
}

export default Popularprojectcard;
