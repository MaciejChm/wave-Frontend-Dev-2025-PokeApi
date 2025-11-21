export async function getPokemons(limit = 6) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  const data = await response.json();

  const detailedPokemonData = await Promise.all(
    data.results.map(async (item) => {
      const resp = await fetch(item.url);
      const pokemonDetails = await resp.json();

      return {
        name: pokemonDetails.name,
        id: pokemonDetails.id,
        image: pokemonDetails.sprites.front_default,
        types: pokemonDetails.types.map(t => t.type.name),
      };
    })
  );

  return detailedPokemonData;
}