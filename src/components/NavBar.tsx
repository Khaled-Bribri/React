import PropTypes from "prop-types";

function NavBar({ setPokemonIndex, pokemonList }) {
  const handlePokemonSelection = (index) => {
    if (pokemonList[index].name === "pikachu") {
      alert("pika pikachu !!!");
    }
    setPokemonIndex(index);
  };

  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button
          type="button"
          onClick={() => handlePokemonSelection(index)}
          key={pokemon.name}
        >
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

NavBar.propTypes = {
  setPokemonIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ).isRequired,
};

export default NavBar;
