import { useState, useEffect } from 'react'
// const CONST_ENDPOINT_NUM_POKEMON = `https://pokeapi.co/api/v2/pokemon/`

function PokemonCard() {
    const rnd = Math.floor(Math.random() * (150 - 1) + 1)
    const [pokemonData,setPokemonData] = useState(null)
    


    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${rnd}`)  
        .then(response => response.json())
        .then(data => {
            setPokemonData(data)
    })
    },[] )

    return(
        <>
            {pokemonData &&
                
                <div className='bg-white w-80 align-middle rounded-3xl drop-shadow-2xl shadow-2xl'>
                    
                    <div className=' bg-white rounded-t-3xl flex flex-col justify-center'> 

                        <div>
                            <img  className='absolute top-0 m-0 rounded-t-3xl justify-center' src="./src/assets/bg-pattern-card.svg" alt="Parte superior de la carta" />
                        </div>

                        <div className='flex flex-row justify-center m-5 '>
                            
                            <img className='relative bg-white rounded-full w-3/4 m-6 ring-offset-2 ring-4 ring-darkGray' src={`${pokemonData.sprites.front_default}`} alt="Pokemon mostrandose" /> 
   
                        </div>

                        <p className='font-sans text-black'> <strong>{pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1)}</strong> <span className='text-darkGrayishBlue'>{pokemonData.stats[0].base_stat} hp</span></p>
                        <p className='font-sans pb-3 text-darkGrayishBlue'>{pokemonData.base_experience} exp</p>
                        {/* {pokemonData && <p>{pokemonData.sprites.front_default}</p>} */}

                    </div>
                    
                    <div className='flex flex-row justify-center space-x-12  text-xs mt-6 font-serif mb-6 border-t-black'>
                        
                        <p className='font-sans text-black' ><strong> {pokemonData.stats[1].base_stat}k </strong><br /> Ataque </p>
                        <p className='font-sans text-black'><strong>{pokemonData.stats[3].base_stat}k </strong> <br /> Ataque Especial</p>
                        <p className='font-sans text-black'><strong>{pokemonData.stats[2].base_stat}k </strong> <br /> Defensa</p>
                        
                    </div>

                </div>
            }
        </>
    )

}

export default PokemonCard