import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
//Start all friends with a value of not chosen. Map out friends. 
console.log(friends)
class App extends Component {
 state = {
  friends,
  chosen:[],
  score: 0,
  highscore:0,
  message: "Keep Guessing!"
 };

endGame = () => {
  if (this.state.score > this.state.highscore) {
    this.setState({
    message: "NOT BAD--TRY AGAIN?",
    highscore: this.state.score, 
    score: 0,

    });
    
  }
  this.state.friendCards.forEach(friendCard => {
   
    this.setState({ 
     
      })
  });

  this.setState({score: 0});
  return true;
};


shuffle = () => {
  let newFriends =  friends => {
    for (let i = friends.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [friends[i], friends[j]] = [friends[j], friends[i]];
  this.setState({ friends: newFriends });
    }
  }
};

 handleClick  = () => {
  
     
  if (this.chosen) {
    this.setState({ 
    message: "You like Star Wars better, don't you?Let's try this again, practice makes perfect",
    highscore: (this.state.score > this.state.highscore) ? this.state.score : this.state.highscore,
    score: 0,
    })
  }
  
  
else if (this.score === 12) {
  this.setState({ message: "You win!" });
}
else 
this.setState({
  chosen:true,
  score: this.state.score + 1})

this.shuffle();

};
    


render() {
    return( 
   
   <div>
    <nav className="navbar navbar-dark bg-primary">
      <ul>
        <li> <img alt="StarTrek Icon" src="https://img.icons8.com/metro/50/000000/star-trek-symbol.png"></img>
        Trak the Trekker</li>
        <li> Score: {this.state.score}  </li>
        <li> High Score: {this.state.highscore} </li>
      </ul>
    </nav>
        <Title>Star Trek, TNG: Trak the Trekker</Title>
        <h2> Click on a new Star Trek face below, but don't repeat yourself. If you get them all, you win!</h2>
        <h2> {this.state.message}</h2>

<div className="table-responsive">
         
            {this.state.friends.map(friend => (
          <FriendCard
            chosen={this.chosen}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            handleClick={friend.handleClick}
             />
             
            )
            )}
        </div>
       
      </div>
    )}
           
                
          
  
     
        
        
        
      
    
      }
     

            
export default App;

