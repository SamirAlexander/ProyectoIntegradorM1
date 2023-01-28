import Card from "./Card";
import "../styles/Cards.css";
import { Link } from "react-router-dom";

export default function Cards(props) {
  const { characters } = props;
  const { onClose } = props;

  return (
    <div className="cards">
      {characters.map((character) => (
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
