import React from 'react'
import pokeball from '../../assets/poke-ball.png'
const Header = () => {
  return (
    
    <div className='flex items-center justify-center gap-2'>
    <img src={pokeball}/>
    <h1 className='bg-linear-to-r from-[#E6722E] to-[#F19B38] bg-clip-text text-transparent text-3xl font-semibold'>Pokémon Explorer</h1>
    </div>
    
  )
}

export default Header