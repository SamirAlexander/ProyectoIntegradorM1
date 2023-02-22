import "./App.css";
import { Route, Routes } from "react-router-dom";
import Cards from "./components/Cards.jsx";
import About from "./components/About";
import Detail from "./components/Detail ";
import Nav from "./components/Nav";
import Favorites from "./components/Favorites.jsx";

export default function App() {
  return (
    <div className="App" style={{ padding: "25px" }}>
      <Nav />
      <Routes>
        <Route path="/home" element={<Cards />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}
