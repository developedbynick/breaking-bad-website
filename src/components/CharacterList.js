import React from "react";
import Character from "./Character";

import "./css/characterList.css";
function CharacterList({ characters }) {
  return (
    <div className="character-list cl">
      {characters.map((c) => (
        <Character character={c} key={c.char_id} />
      ))}
    </div>
  );
}

export default CharacterList;
