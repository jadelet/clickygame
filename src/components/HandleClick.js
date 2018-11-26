import React from "react";
import friends from "./friends.json";
  handleClick = (event) => {
      console.log("buttonclicked");
    this.setState({chosen:true})
    
    .then(console.log("buttonclicked="+ event.target.chosen)) 
    .then(response => console.log(response))
    .catch(err => console.log(err));

     // check entire list to see if every friend was chosen.

  // if  {friends.every(friends.chosenFriend)};
  
  
  // else {}
  
  this.setState({ friends })};
 