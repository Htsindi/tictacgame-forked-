import { useState } from "react";

import Player from "./components/Player.jsx";
import Gameboard from "./components/Gameboard.jsx";
import Log from "./components/Log.jsx";

function App() {
  //We need to add a state for the players name and their symbol for both   player and Gameboard
  const [activePlayer, setActivePlayer] = useState("X");
  //Log useStat
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";

      if (prevTurns.length > 0 && prevTurns[0].activePlayer[0].player === "X") {
        currentPlayer = "O";
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
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
          <Gameboard onSelectSquare={handleSelectSquare} turns={gameTurns} />
        </div>
      </div>
      <Log />
    </main>
  );
}

export default App;
