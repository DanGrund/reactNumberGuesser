import React from 'react';

export default class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userGuess: '',
      newMin: '',
      newMax: '',
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
    this.setState({ userGuess: '', newMin: 0, newMax: 100 });
    this.props.changeRange(this.state.newMin, this.state.newMax);
    this.props.handleReset();
  }

  handleChangeRange(e){
   this.props.changeRange(this.state.newMin, this.state.newMax);
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
          disabled={!this.state.userGuess}
          className='guess-button'
          onClick={this.handleSubmit.bind(this)}
        >Guess</button>

        <button
          disabled={!this.state.userGuess}
          className='clear'
          name='Clear'
          onClick={this.handleClear.bind(this)}
        >Clear</button>

        <button
          
          className='reset'
          onClick={this.handleReset.bind(this)}
        >Reset</button>

        <div className='new-range'>
          <p> Range: {this.props.min} - {this.props.max}</p>

          <input
            className='new-min'
            type='number'
            placeholder='Min'
            value={this.state.newMin}
            onChange={(e) => this.setState({ newMin: e.target.value })}
          />

          <input
            className='new-max'
            type='number'
            placeholder='Max'
            value={this.state.newMax}
            onChange={(e) => this.setState({ newMax: e.target.value })}
          />

          <button
            disabled={!this.state.newMin || !this.state.newMax}
            className='change-range'
            onClick ={this.handleChangeRange.bind(this)}
          >Set A New Range</button>
        </div>

      </div>
    );
  }
}
