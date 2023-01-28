import { useState } from "react";
import "../styles/SearhBar.css";

export default function SearchBar({ onSearch }) {
  let [nombrePersonaje, setNombrePersonaje] = useState({});

  function onChange({ target }) {
    setNombrePersonaje(target.value);
  }

  function borrarInput() {
    let miInput = document.querySelector("input");
    miInput.value = "";
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
