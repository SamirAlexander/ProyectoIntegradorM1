import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cards from "./components/Cards.jsx";
import About from "./components/About";
import Detail from "./components/Detail ";
import Nav from "./components/Nav";

function App() {
  let [characters, setCharacters] = useState([]);

  function onSearch(nombrePersonaje) {
    const validacionPersonaje = characters
      .map((personaje) => {
        return personaje.id === parseInt(nombrePersonaje) ? personaje : null;
      })
      .filter((personaje) => personaje);

    if (validacionPersonaje[0]) {
      alert("El personaje ya se encuentra en pantalla");
    } else {
      fetch(`https://rickandmortyapi.com/api/character/${nombrePersonaje}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((characters) => [...characters, data]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
    }
  }

  function onClose(idToClose) {
    setCharacters(
      characters.filter(({ id }) => {
        return id !== idToClose ? id : null;
      })
    );
  }

  return (
    <div className="App" style={{ padding: "25px" }}>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
