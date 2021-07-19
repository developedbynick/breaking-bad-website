import "./App.css";
// Configuration options and hooks
import { useState, useEffect } from "react";
import { baseurl, charactersEndpoint } from "./config";
import useFetch from "./hooks/useFetch";
// components
import Form from "./components/Form";
import CharacterList from "./components/CharacterList";
import Error from "./components/Error";
import Loading from "./components/Loading";
import characterPage from "./components/CharacterPage";
import Error404 from "./components/404.js";
// Routing components
import { Switch, Route } from "react-router-dom";
function App() {
  const [limit] = useState(0);
  const [characters, isLoading, error] = useFetch(
    `${baseurl}${charactersEndpoint}${limit || 100}`
  );
  const [filteredCharacters, setFilteredCharacters] = useState([...characters]);
  const [value, setValue] = useState("");
  console.log(value);
  // Functions
  const filterCharacters = (query) => {
    query = query.trim().toLowerCase(); // Do not mutate functional parameters recklessly!
    if (!query.trim()) setFilteredCharacters(characters);
    if (query.length === 0) setFilteredCharacters(characters);
    // 1) Filtering 'The Breaking Bad' Characters by name!
    const filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(query)
    );
    // 2) Setting the filtered characters.
    setFilteredCharacters(filteredCharacters);
  };
  useEffect(() => {
    setFilteredCharacters(characters);
  }, [characters]);

  // Conditions

  if (error) {
    return <Error />;
  }
  if (isLoading) return <Loading />;
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Form
            value={value}
            setValue={setValue}
            filterCharacters={filterCharacters}
          />
          <div className="cl-container">
            <h1>Breaking Bad cast</h1>
            <CharacterList characters={filteredCharacters} />
          </div>
        </Route>
        <Route path="/character/:id" exact component={characterPage} />
        <Route path="*" exact>
          <Error404 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
