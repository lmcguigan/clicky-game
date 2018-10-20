import React, { Component } from "react";
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Splash from "./components/Splash";
import Modal from "./components/Modal"
import data from "./fruits.js"

class App extends Component {
  state = {
    correctClickCount: 0,
    highScore: 0,
    barMessage: "",
    fruits: [],
    fruitTracker: [],
    modalShow: false
  };

  shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  loadShuffledFruits = () => {
    let newState = { ...this.state };
    let shuffledFruits = this.shuffle(newState.fruits);
    this.setState({ fruits: shuffledFruits });
  }

  componentDidMount() {
    this.setState({
      fruits: data
    })
  };
  
  closeModal = (event) =>{
    this.setState({modalShow: false});
  };

  handleCardClick = (event) => {
    console.log(event.target.name)
    event.preventDefault();
    let thisId = event.target.name;
    if (this.state.fruitTracker.indexOf(thisId) !== -1) {
      this.setState({ correctClickCount: 0 })
      this.setState({ barMessage: "You guessed incorrectly!" })
      this.setState({ fruitTracker: [] })
      this.loadShuffledFruits();
    }
    else {
      console.log(this.state.correctClickCount)
      this.setState({ correctClickCount: this.state.correctClickCount + 1 });
      let adjClickCount = this.state.correctClickCount + 1
      if (adjClickCount >= this.state.highScore) {
        this.setState({ highScore: adjClickCount })
      }
      this.setState({ barMessage: "You guessed correctly!" })
      //if the correct click count is less than 11, continue the game
      if (this.state.correctClickCount < 11) {
        this.setState({ fruitTracker: [...this.state.fruitTracker, event.target.name] })
        console.log(this.state.fruitTracker)
        this.loadShuffledFruits();
      }
      //if they have 11 correct clicks and they attain one more, they have won the game
      //show them a congratulations message and reset the game
      else {
        console.log("congratulations!");
        this.setState({ fruitTracker: [] })
        this.setState({ correctClickCount: 0 })
        this.setState({barMessage: ""})
        this.setState({modalShow: true})
        this.loadShuffledFruits();
      }
    }
  };
  render() {
    return (
      <Wrapper>
        <NavBar count={this.state.correctClickCount} score={this.state.highScore} message={this.state.barMessage} />
        <Splash />
        <Cards fruits={this.state.fruits} handleCardClick={this.handleCardClick} />
        <Modal show = {this.state.modalShow}/>
      </Wrapper>
    )
  }
}

export default App;
