function NavBar({ pokemonList }) {
  return (
    <nav>
      {pokemonList.map((pokemon) => (
        <button key={pokemon.name}>{pokemon.name}</button>
      ))}
    </nav>
  );
}

export default NavBar;
