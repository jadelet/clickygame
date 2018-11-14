import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
//Start all friends with a value of not chosen. Map out friends. 
class App extends Component {
  state = {
    friends
  };
 chosenFriend = false
  
 
 
    // when an image component is clicked, Mark it chosen
  // check entire list to make sure there is still at lest one not chosen
  // if one is still not chosen, rearrange list and remap randomly.
  
 function 
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

function shuffle(friends) {
  const rand = friends.length, t, i;

  // While there remain elements to shuffle…
  while (rand) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * rand--);

    // And swap it with the current element.
    t = friends[rand];
    friends[rand] = friends[i];
    friends[i] = t;
  }

  return friends;
}


  rearrangeFriend = id => {
 
    // Set this.state.friends equal to the new friends friends
    this.setState({ friends });
    
  };



//when clicked:

//If all friends have not beek clicked, then click on friend. If friend clicked chosenFriend = false, then mark true and choose friend. If friend clicked chosenFriend = True then state 'Better luck next time, let's play again.'
export default App;
