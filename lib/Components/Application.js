import React from 'react'
import { render } from 'react-dom';
import Input from './inputField';
import Output from './outputField';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      min: 0,
      max: 100,
      lastGuess: '',
      randomNumber: null,
      gameState: 'pageload',
    };
  }

  componentDidMount() {
    this.newRandomNumber();
  }


  checkGuess(guess) {
    this.setState({ lastGuess: guess });

    if (guess < this.state.max && guess > this.state.min) {
      if (guess > this.state.randomNumber) {
        this.setState({ gameState: 'lower' });
      } else if (guess < this.state.randomNumber) {
        this.setState({ gameState: 'higher' });
      } else {
        this.setState({ gameState: 'winning', lastGuess: '' });
        this.newRandomNumber();
      }
    } else {
      this.setState({ gameState: 'dumbGuess' });
    }
  }

  newRandomNumber() {
    this.setState({
      randomNumber: Math.floor(Math.random() * (+this.state.max - +this.state.min + 1)) + +this.state.min
    });
  }

  resetGame() {
    this.newRandomNumber();
    this.setState({ lastGuess: '', gameState: 'pageload' });
  }

  render() {
    return (
      <div className = 'main-app'>
        <Output
          lastGuess={this.state.lastGuess}
          gameState={this.state.gameState}
          min={this.state.min}
          max={this.state.max}
        />
        <Input
          handleSubmit={this.checkGuess.bind(this)}
          handleReset={this.resetGame.bind(this)}
          min={this.state.min}
          max={this.state.max}
        />
      </div>
    );
  }
}
