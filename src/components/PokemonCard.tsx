import "./PokemonCard.css";
function PokemonCard() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  const pokemon = {
    name: pokemonList[0].name,
    imgSrc: pokemonList[0].imgSrc,
  };

  return (
    <>
      <figure className="card">
        { pokemon.imgSrc  !="" ? <img src={pokemon.imgSrc} alt={pokemon.name} className="cardImg"/>: <p>???</p>}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </>
  );
}
export default PokemonCard;
