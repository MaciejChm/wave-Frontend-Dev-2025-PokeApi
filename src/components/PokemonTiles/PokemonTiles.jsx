import { useEffect, useState } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import { getPokemons } from "../../api/pokemonAPI";
import Box from "@mui/material/Box";

const PokemonTiles = () => {
    const [pokemonList, setPokemonList] = useState([]);

      useEffect(() => {
    async function loadPokemonData() {
      const data = await getPokemons();
      setPokemonList(data);
    }

    loadPokemonData();
  }, []);

  return (
    <>
    <Box sx={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: 2, 
      justifyContent: 'center',
      height: '150px',
      width: '100%',
      boxSizing: 'border-box'
    }}>
          {pokemonList.map((p, index) => (
              <Box key={index} sx={{ 
                width: { xs: '100%', sm: '30%', md: '30%' },
                flexBasis: { xs: '100%', sm: '30%', md: '30%' },
                boxSizing: 'border-box'
              }}>
                  <PokemonCard
                      key={p.id}
                      name={p.name}
                      id={p.id}
                      image={p.image}
                      types={p.types} />
              </Box>
          ))}
      </Box>
      </>
  );
}

export default PokemonTiles

