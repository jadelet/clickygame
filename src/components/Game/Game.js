import React, { Component } from "react";
import FriendCard from "../FriendCard";
import Title from "../Title";
import ClickItem from "../ClickItem";
import friends from "../friends.json";
import "./game.css"


class Game extends Component {
  state = {
      friends,
      chosen:[],
      score: 0,
      highscore:0,
      message: "Keep Guessing!"
 
  };

  componentDidMount() {
    this.setState({friends: this.shuffleFriends(this.state.friends) });
  }

  handleCorrectGuess = newFriends => {
    const { highscore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = Math.max(newScore, highscore);

    this.setState({
     friends: this.shuffleFriends(newFriends),
      score: newScore,
      highscore: newTopScore
    });
  };

  handleIncorrectGuess =friends => {
    this.setState({
     friends: this.resetFriends(friends),
      score: 0
    });
  };

  resetFriends =friends => {
    const resetFriends =friends.map(item => ({ ...item, clicked: false }));
    return this.shuffleFriends(resetFriends);
  };

  shuffleFriends =friends => {
    let i =friends.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp =friends[i];
     friends[i] =friends[j];
     friends[j] = temp;
      i--;
    }
    return friends;
  };

  handleItemClick = id => {
    let guessedCorrectly = false;
    const newFriends = this.state.friends.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }
      }
      return newItem;
    });
    guessedCorrectly
      ? this.handleCorrectGuess(newFriends)
      : this.handleIncorrectGuess(newFriends);
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
            handleClick={this.handleItemClick}
             />
             
            )
            )}
        </div>
       
      </div>
    )
  }
}

export default Game;
