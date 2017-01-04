import React from 'react';

export default class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userGuess: '',
    };
  }

  handleSubmit(e) {
    this.props.handleSubmit(this.state.userGuess);
    this.setState({ userGuess: '' });
  }

  handleClear(e) {
    this.setState({ userGuess: '' });
  }

  handleReset(e) {
    this.setState({ userGuess: '' });
    this.props.handleReset();
  }

  render() {
    return (
      <div>
        <input className='guess-input'
          type='number'
          placeholder='Make a guess'
          value={this.state.userGuess}
          min={this.props.min}
          max={this.props.max}
          onChange={(e) => this.setState({ userGuess: e.target.value })}
        />

        <button
          className='guess-button'
          onClick={this.handleSubmit.bind(this)}
        >Guess</button>

        <button
          disabled
          className='clear'
          name='Clear'
          onClick={this.handleClear.bind(this)}
        >Clear</button>

        <button
          className='reset'
          onClick={this.handleReset.bind(this)}
        >Reset</button>

      </div>
    );
  }
}
