import { useState } from "react";

export default function Player({ name, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);

  function btnHandler() {
    setIsEditing(true);
  }

  let playerName = <span className="player-name">{name}</span>;
  // let btnCaption = 'Edit';

  if (isEditing) {
    playerName = <input type="text" required />;
    //btnCaption = 'Save';
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={btnHandler}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
