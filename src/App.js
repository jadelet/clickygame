import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
//Start all friends with a value of not chosen. Map out friends. 
class App extends Component {
 state = {
  friends
 };

  render() {
    return (
   
      <div>
           <nav className="navbar navbar-dark bg-primary">
 <ul>
  <li> <img alt="StarTrek Icon" src="https://img.icons8.com/metro/50/000000/star-trek-symbol.png"></img>
  Trak the Trekker</li>
  <li>correct/incorrect goes here</li>
  <li> score goes here.</li>
  <li>  top score goes here. </li>
</ul>
</nav>
        <Title>Star Trek, TNG: Trak the Trekker</Title>
        <h2> Click on a new Star Trek face below, but don't repeat yourself. If you get them all, you win!</h2>
       

<div className="table-responsive">
         
            {this.state.friends.map(friend => (
          <FriendCard
            chosen={this.chosenFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
           handleClick={friend.handleClick}
             />
          
       
        ))}
        </div>
       
      </div>
    )}
  };
  //  when an image component is clicked, Mark it chosen by setting chosen to "true" 
  
      
      // }


 
 
      


  // // rearrange list and remap randomly.
      // Set this.state.friends equal to the new friends 
  
// if allChosen
            
export default App;

