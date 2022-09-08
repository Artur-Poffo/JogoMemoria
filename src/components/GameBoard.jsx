import React from 'react';
import { Cards } from './Cards';

function GameBoard(props) {
  return (
    <div id='gameBoard' >
      {props.cards.map((card, index) => {
        return <Cards handleFlipped={props.handleFlipped} key={index} card={card} ></Cards>
      })}
    </div>
  )
}

export default GameBoard;