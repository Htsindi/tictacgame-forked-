import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  
  function btnHandler () {
    setIsEditing(true);
  };

  let playerName = <span className="player-name">{name}</span>;
 // let btnCaption = 'Edit';

  if (isEditing) {
    playerName = <input type="text" required />;
    //btnCaption = 'Save';
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={btnHandler}>{isEditing ? 'Save' : 'Edit'}</button>
      </span>
    </li>
  );
}
