// import React from "react";


  
     
const handleClick = props => {
   console.log(props)
  
     
    if (this.chosen) {
      this.setState({ 
      message: "You like Star Wars better, don't you?Let's try this again, practice makes perfect",
      highscore: (this.state.score > this.state.highscore) ? this.state.score : this.state.highscore,
      score: 0,
      })
    }
    
    
 else if (this.score = 12){
    this.setState({ message: "You win!" })
 }
  else  {
  this.setState({
    chosen:true,
    score: this.state.score + 1})
  
  this.shuffle();
  
  };
}



//   //   .then(response => console.log(response))
//   //   .catch(err => console.log(err));
   
//   //    // check entire list to see if every friend was chosen.

//   // // if  {friends.every(friends.chosenFriend)};

  
  
 
  

 


  export default handleClick;