import React, { useState, useEffect } from "react";
import Character from "./Character";
import Pagination from "./Pagination";
import "./css/characterList.css";
function CharacterList({ characters, query }) {
  const [page, setPage] = useState(1);
  const [limit] = useState(9);
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const numPages = Math.floor(characters.length / limit) || 1;
  const charactersToBeDisplayed = characters.slice(startIndex, endIndex);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);
  useEffect(() => {
    setPage(1);
  }, [characters]);
  if (characters.length === 0) {
    const isQueryGreaterThan25Chars = query.length > 25;
    return (
      <div className="character-list cl not-found">
        <h2 className="character-list-not-found">
          No Results Found for "{query.substr(0, 25)}
          {isQueryGreaterThan25Chars ? "..." : ""}"
        </h2>
      </div>
    );
  }
  return (
    <React.Fragment>
      <div className="character-list cl">
        {charactersToBeDisplayed.map((character) => (
          <Character character={character} key={character.char_id} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} numPages={numPages} />
    </React.Fragment>
  );
}

export default CharacterList;
