import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FuturamaChars from "./FuturamaChars.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    FuturamaChars
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Futurama Clicky Game!</Title>
        {this.state.FuturamaChars.map(FuturamaChars => (
          <ImageCard
            id={FuturamaChars.id}
            image={FuturamaChars.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
