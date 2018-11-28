import React from "react";
import "./FriendCard.css";



const FriendCard = props => (
  
  <div className="card">

    <div className="img-container" 
      role="img"
      aria-label="click item"
      onClick={() => props.handleClick(props.id)}
      style={{ backgroundImage: `url("${props.image}")` }}
      className={`click-item${props.shake ? " shake" : ""}`}>
     <img alt={props.name} src={props.image} />
    </div>
  </div>

);

export default FriendCard;

