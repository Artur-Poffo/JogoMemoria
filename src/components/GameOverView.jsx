import React from "react";

export function GameOverView(props) {
  return (props.show ?
    <div id="gameOver">
      <h1>Fim de Jogo!!!</h1>
      <button id="restart" onClick={props.onRestart} >Reiniciar</button>
    </div> : <></>
  )
}