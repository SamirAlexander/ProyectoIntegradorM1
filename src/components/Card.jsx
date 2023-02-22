import "../styles/Card.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="card">
      <button className="boton">Fav</button>
      <button className="boton" onClick={() => props.onClose(props.id)}>
        X
      </button>
      <Link to={`/detail/${props.id}`}>
        <img src={props.image} alt=""></img>
        <h2 className="name">{props.name}</h2>
        <h2 className="data">{props.species}</h2>
        <h2 className="data">{props.gender} </h2>
      </Link>
    </div>
  );
}
