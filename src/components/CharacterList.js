import React, { useState } from "react";
import Character from "./Character";
import Pagination from "./Pagination";
import "./css/characterList.css";
function CharacterList({ characters }) {
  const [page, setPage] = useState(1);
  const [limit] = useState(12);
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const numPages = Math.floor(characters.length / limit);
  const paginatedCharacters = characters.slice(startIndex, endIndex);
  return (
    <React.Fragment>
      <div className="character-list cl">
        {paginatedCharacters.map((c) => (
          <Character character={c} key={c.char_id} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} numPages={numPages} />
    </React.Fragment>
  );
}

export default CharacterList;
