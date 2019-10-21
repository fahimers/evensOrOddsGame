import React from 'react';

import { connect } from 'react-redux';
import { expandInstructions, collapseInstructions } from '../actions/settings';

const Instructions  = props => {
  const { instructionExpanded,expandInstructions,collapseInstructions } = props;
  if (instructionExpanded) {
    return (
      <div>
        <h3>Instructions</h3>
        <p>Welcome to the evens or odds game.</p>
        <p>The Deck is shuffled. Then you guess: will the next card be even or odd </p>
        <p>Make a guess on every draw, you get points for every right answer</p>
        <p>(Face cards don't count)</p>
        <br />
        <button onClick= {collapseInstructions} >Show less</button>
      </div>

    );
  }
  
  return (
    <div>
      <h3>Instructions</h3>
      <p>Welcome to the evens or odds game. Press read more for instructions</p>
      <button onClick ={expandInstructions}>Read more </button>
    </div>
    
  )
  
}



export default connect(
  state => ({instructionsExpanded: state.instructionExpanded }), 
  {expandInstructions,collapseInstructions}
  ) (Instructions);