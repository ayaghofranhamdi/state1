import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: "Pedro",
        bio: "A passionate Football player with diverse skills.",
        imgSrc:
          "https://img.a.transfermarkt.technology/portrait/big/65278-1695027154.jpg?lm=1",
        profession: "Football player",
      },
      shows: true,
    };
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };


  render() {
    const { person, shows } = this.state;
    return (
      <div>
        {shows && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Person" />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <button onClick={this.toggleShow}>
           {shows ? "Hide" : "Show"}
        </button>
        
      </div>
    );
  }
}

export default App;
