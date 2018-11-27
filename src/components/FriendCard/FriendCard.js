import React from "react";
import "./FriendCard.css";
import handleClick from "../HandleClick.js"


const FriendCard = props => (
  
  <div className="card">

    <div className="img-container" onClick={() => handleClick()}>
     <img alt={props.name} src={props.image} />
    </div>
  </div>

);

export default FriendCard;

