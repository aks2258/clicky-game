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

  // Create an imgShuffle function to shuffle images once being clicked. Create a curScore keeping variable with "let."
  // curScore resets if the same image is clicked, highScore is saved.

  // Map over this.state.FuturamaChars and render a FuturamaChars component for each object. Attach onChange to each object
  // to handle imgShuffle function
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
