import React from "react";
import "../styles/Details.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  let { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, []);

  const { name, status, species, gender, origin } = character;
  console.log(origin);

  return (
    <div className="detail-view">
      <div>
        <h1>Nombre: {name}</h1>
        <h3>STATUS: {status}</h3>
        <h3>ESPECIE: {species} </h3>
        <h3>GÉNERO: {gender} </h3>
        <h3>ORIGIN: {origin?.name} </h3>
      </div>
      <img className="img-detail" src={character.image} />
    </div>
  );
}

export default Detail;
