import { useState } from "react";

export default function Player({ InitialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(InitialName);
  const [isEditing, setIsEditing] = useState(false);

  function btnHandler() {
    setIsEditing((editing)=>!editing);}


  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption = 'Edit';

  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
    //btnCaption = 'Save';
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={btnHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
