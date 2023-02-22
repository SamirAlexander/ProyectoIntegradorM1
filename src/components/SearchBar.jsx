import { useState } from "react";
import { connect } from "react-redux";
import "../styles/SearhBar.css";
import {
  eliminarUnCharacter,
  obtenerCharacter,
} from "../Redux/actions/characterAction.js";
import axios from "axios";

function SearchBar({ char, obtenerCharacter }) {
  let [nombrePersonaje, setNombrePersonaje] = useState({});

  function onChange({ target }) {
    setNombrePersonaje(target.value);
  }

  function borrarInput() {
    let miInput = document.querySelector("input");
    miInput.value = "";
  }

  function validarCharacter(nombrePersonaje) {
    const { allCharacters } = char;
    const characterInArray = allCharacters.filter((e) => {
      return e.id === parseInt(nombrePersonaje);
    });
    if (characterInArray.length === 1) {
      return true;
    }
  }

  function onSearch(nombrePersonaje) {
    const validacionCharacter = validarCharacter(nombrePersonaje);
    if (validacionCharacter) {
      alert("El Personaje ya esta en pantalla");
    } else {
      axios
        .get(`https://rickandmortyapi.com/api/character/${nombrePersonaje}`)
        .then((response) => {
          obtenerCharacter(response.data);
        })
        .catch((err) => {
          throw new Error(err);
        });
    }
  }

  return (
    <div>
      <input
        type="search"
        placeholder="Digite el ID del Personaje"
        onChange={(evento) => onChange(evento)}
      />
      <button
        className="boton-agregar"
        onClick={() => {
          onSearch(nombrePersonaje);
          borrarInput();
        }}
      >
        Agregar
      </button>
    </div>
  );
}

/////////////////////////////////////////////////////////////

const mapStateToProps = (state) => {
  return {
    char: state,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    obtenerCharacter: (character) => dispatch(obtenerCharacter(character)),
    eliminarUnCharacter: () => dispatch(eliminarUnCharacter()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
