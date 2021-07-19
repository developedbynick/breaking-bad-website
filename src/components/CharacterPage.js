import React from "react";
// React router components
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// Configuration
import { baseurl } from "../config";
// Custom hooks
import useFetch from "../hooks/useFetch";
// Components
import Error from "./Error";
import Loading from "./Loading";
// Styling
import "./css/CharacterPage.css";

function CharacterPage() {
  const { id } = useParams();
  const [[character], isLoading, error] = useFetch(
    `${baseurl}characters/${id}`
  );

  if (error) {
    return <Error />;
  }
  if (isLoading) return <Loading />;
  return (
    <div className="character-page">
      <div className="col1">
        <img src={character.img} alt={character.name} />
        <div className="special-info">
          <h4 className="name">Name: {character.name}</h4>
          <h4 className="nickname">Nickname: {character.nickname}</h4>
          <h4 className="occupations">
            Occupations: {character.occupation.join(" , ")}
          </h4>
          <h4 className="seasons">
            Seasons: {character.appearance.join(" · ")}
          </h4>
          <h4 className="status">Status: {character.status}</h4>
        </div>
        <Link className="btn" to="/" style={{ textDecoration: "none" }}>
          Back To Home
        </Link>
      </div>
    </div>
  );
}

export default CharacterPage;
