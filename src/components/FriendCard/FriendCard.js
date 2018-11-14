import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
      <span onClick={() => props.rearrangeFriends(props.id)} className="rearrange">
    </span>
  </div>
);

export default FriendCard;
