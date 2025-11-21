import React, { useState } from 'react'

const SearchBar = () => {
    const [searchPokemon, setSearchPokemon] = useState("")
  return (
    <><input
  type="text"
  placeholder="Search Pokémon..."
  className="bg-[#1E1E1E] text-[#626E7C] px-4 py-2 rounded-full m-8 w-[40%] focus:outline-none"
  value={searchPokemon}
  onChange={(e) => setSearchPokemon(e.target.value)}
/></>
  )
}

export default SearchBar