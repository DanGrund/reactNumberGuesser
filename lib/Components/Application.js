import React from 'react'
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
      gameState: 'gameStart',
    };
  }

  componentDidMount() {
    this.newRandomNumber();
  }

  newRandomNumber() {
    this.setState({
      randomNumber: Math.floor(Math.random() * (+this.state.max - +this.state.min + 1)) + +this.state.min
    });
  }

  resetGame() {
    this.setState({ lastGuess: '', gameState: 'gameStart', });
    this.newRandomNumber();
  }

  makeItHarder() {
    this.setState({ min: +this.state.min-10, max: +this.state.max+10,})
  }

  changeRange(newMin, newMax) {
    this.setState({ min: newMin, max: newMax, gameResponse: 'gameStart' }, () => {this.resetGame() })
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
        this.makeItHarder();
        this.newRandomNumber();
      }
    } else {
      this.setState({ gameState: 'dumbGuess' });
    }
  }

  render() {
    return (
      <div className = 'main-app'>
        <h1> Number Guesser in React</h1>
        <Output
          lastGuess={this.state.lastGuess}
          gameState={this.state.gameState}
          min={this.state.min}
          max={this.state.max}
        />
        <Input
          handleSubmit={this.checkGuess.bind(this)}
          handleReset={this.resetGame.bind(this)}
          changeRange={this.changeRange.bind(this)}
          min={this.state.min}
          max={this.state.max}
        />
      </div>
    );
  }
}
