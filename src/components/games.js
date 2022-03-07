import play_game from "../img/play-game.png"

import "../styles/game.css"

const Game = () => {
  return (
    <div className="game">
      <div className="game-title">
        <h2 className="f-orange">G A M E</h2>
        <p>Game</p>
        <div className="small-line" />
      </div>
      <div className="game-bar-title">
        <p>Play Our</p>
        <p>Amazing Game</p>
      </div>
      <div className="game-board">
        <img src={play_game} />
      </div>
      <button className="play-btn">Let's Play</button>
    </div>
  )
}

export default Game
