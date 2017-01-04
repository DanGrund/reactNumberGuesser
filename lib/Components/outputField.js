import React from 'react';

const Output = ({ lastGuess, gameState, min, max }) => {
  let message;

  switch(gameState) {
    case 'pageload':
      message = 'Guess a number!';
      break;
    case 'lower':
      message = 'Sorry, that guess is too high. Try a lower number.';
      break;
    case 'higher':
      message = 'Sorry, that guess is too low. Try a higher number.';
      break;
    case 'winning':
      message = 'Winner Winner Winner';
      break;
    case 'dumbGuess':
      message = `Please guess a number between ${min} and ${max}`;
      break;
    default:
      message = '';
  }

  let lastGuessResponse;

  if (lastGuess) {
    lastGuessResponse = (
      <div>
        <p>Your last guess was</p>
        <span>{lastGuess}</span>
      </div>
    );
  }

  return (
    <div className='response-field'>
      {lastGuessResponse}
      <p>{message}</p>
    </div>
  );
};

export default Output;
