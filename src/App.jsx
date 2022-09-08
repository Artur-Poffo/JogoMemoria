import React, { useState, useEffect } from 'react'
import './App.css'
import { GameOverView } from './components/GameOverView'
import GameBoard from './components/GameBoard'
import Game from "./game/game"
import game from './game/game'

function App() {
  const [gameOver, setGameOver] = useState(false)
  const [cards, setCards] = useState([])

  useEffect(() => {
    setCards(Game.createCardsFromTechs())
  }, [])

  function handleFlipped(card) {
    game.flipCard(card.id,
                 // GAMEOVER TRUE
                 () => {
                  setGameOver(true)
                 },
                 // NO MATCH
                 () => {
                  setCards([...game.cards]) 
                 }
                 )
    setCards([...Game.cards])
  }

  function restart(e) {
    game.clearCards()
    setCards(game.createCardsFromTechs())
    setGameOver(false)
  }

  return (
    <main>

      <GameBoard handleFlipped={handleFlipped} cards={cards} ></GameBoard>
      <GameOverView show={gameOver} onRestart={restart} ></GameOverView>

    </main>
  )

}

export default App