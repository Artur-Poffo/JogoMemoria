import React from "react";

export function Cards(props) {

  return (
    <div onClick={() => props.handleFlipped(props.card)} className={`card ${props.card.flipped ? "flip" : ""}`} id={props.card.id} >
      <div className="card_front">
        <img src={`./src/imgs/${props.card.icon}.png`} alt={props.card.icon} />
      </div>

      <div className="card_back">
        {`</>`}
      </div>
    </div>
  )
}