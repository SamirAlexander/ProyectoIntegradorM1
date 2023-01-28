import React from "react";
import SearchBar from "./SearchBar";
import "../styles/Nav.css";
import { Link } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <div className="nav">
      <SearchBar onSearch={onSearch} />
      <Link className="link" to="/home">
        Cards
      </Link>
      <Link className="link" to="/about">
        About
      </Link>
      <Link className="link" to="/detail/:detailId">
        Detail
      </Link>
    </div>
  );
}

export default Nav;
