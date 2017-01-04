import React from 'react';

export default class Input extends React.Component {
  render(){
    return(
      <div>
        <input id="number" type="number,text" placeholder="Enter a number 1 - 100"></input>
        <button id="guess" disabled>Guess</button>
        <button id="clear" disabled>Clear</button>
        <button id="reset" disabled>Reset</button>
      </div>
    )
  }
}
