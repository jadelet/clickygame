import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };
 const chosenFriend = false
 rearrangeFriend = id => {
 
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
    
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  if (this.state.friends.chosenfriends.includes (false) {
  render() {
    return (
      <div>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            chosenFriend={this.chosenFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
       
          />
        ))}
      </div>
    );
  }
}
else {
  "Better Luck Next time"
  

}

}


//IF all friends have not beek clicked, then click on friend. If friend clicked chosenFriend = false, then mark true and choose friend. If friend cliked chosenFriend = True then state 'Better luck next time, let's play again.'
export default App;
