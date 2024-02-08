import { useState } from "react";

import Player from "./components/Player.jsx";
import Gameboard from "./components/Gameboard.jsx";

function App() {
  //We need to add a state for the players name and their symbol for both   player and Gameboard
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <div>
          <Gameboard
            onSelectSquare={handleSelectSquare}
            activePlayerSymbol={activePlayer}
          />
        </div>
      </div>
      LOG
    </main>
  );
}

export default App;
