import "./PokemonCard.css";
import PropTypes from "prop-types";

PokemonCard.PropTypes = {
  Pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
}
function PokemonCard(props) {
  console.log(props);
  return (
    <>
      <figure className="card">
        { props.pokemon.imgSrc  !="" ? <img src={props.pokemon.imgSrc} alt={props.pokemon.name} className="cardImg"/>: <p>???</p>}
        <figcaption>{props.pokemon.name}</figcaption>
      </figure>
    </>
  );
}
export default PokemonCard;
