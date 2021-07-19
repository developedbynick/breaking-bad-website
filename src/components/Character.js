import React from "react";
import "./css/character.css";
import { Link } from "react-router-dom";
function Character({ character }) {
  return (
    <Link to={`/character/${character.char_id}`} className="character">
      <div className="img-container">
        <img loading={"lazy"} src={character.img} alt={character.name} />
      </div>
      <div className="info">
        <h4>{character.name}</h4>
      </div>
    </Link>
  );
}

export default Character;
