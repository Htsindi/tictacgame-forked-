export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h1>Game Over !</h1>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It&apos;s a tie!</p>}
      <p>
        <button onClick={onRestart}>New Game</button>
      </p>
    </div>
  );
}
