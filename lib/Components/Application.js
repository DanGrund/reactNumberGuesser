import React from 'react';
import Input from './inputField';
import Output from './outputField';
export default class Application extends React.Component {
  constructor(){
    super();
    this.state = {
      randomNumber: '',
      lastGuess: '',
      lowValue: 0,
      highValue: 100,
    }

  }
  render(){
    return (
      <div>
        <Input />
        <Output />
      </div>
    );
  }
}
