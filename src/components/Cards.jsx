import Card from "./Card";
import "../styles/Cards.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { eliminarUnCharacter } from "../Redux/actions/characterAction.js";

function Cards({ char, eliminarUnCharacter }) {
  const { allCharacters } = char;

  function onClose(idToClose) {
    eliminarUnCharacter(idToClose);
  }

  return (
    <div className="cards">
      {allCharacters.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          onClose={onClose}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { char: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    eliminarUnCharacter: (character) =>
      dispatch(eliminarUnCharacter(character)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
