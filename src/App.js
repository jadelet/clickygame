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

//  this.setState({ friends });
  
 
 
  //   // when an image component is clicked, Mark it chosen
  // // check entire list to see if every friend was chosen.
  // const allChosen = friends.every(friends.chosenFriend);

  // // rearrange list and remap randomly.
      // Set this.state.friends equal to the new friends friends
  
// if allChosen
  render() {
    return (
      <div>
        <Title>Friends List</Title>
        <h2> Click on a new face below, but don't repeat yourself. If you get them all, you win!</h2>
        <div className="table-responsive">
         
            {this.state.friends.map(friend => (
          <FriendCard
            chosen={this.chosenFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
             />
          
       
        ))}
        </div>
      </div>
    )}
            }
export default App;

