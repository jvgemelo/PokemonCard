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
                
                <div className='flex flex-col justify-center bg-white w-80 h-96 align-middle rounded-3xl drop-shadow-2xl shadow-2xl'>
                    
                    <div className='relative bg-white rounded-t-3xl flex flex-col justify-center border-b-2 border-solid '> 

                        <div>
                            <img  className='absolute top-0 m-0 rounded-t-3xl justify-center' src="./src/assets/bg-pattern-card.svg" alt="Parte superior de la carta" />
                        </div>

                        <div className='flex flex-row justify-center m-auto w-64 h-64'>
                            
                            {/* <img className='relative bg-white rounded-full w-3/4 m-6 ring-offset-2 ring-4 ring-white' src={`${pokemonData.sprites.front_default}`} alt="Pokemon mostrandose" />  */}
                            <img className=' relative bg-white rounded-full  m-6 w-3/4 h-3/4 ring-8 ring-white' src={`${pokemonData.sprites.other.dream_world.front_default}`} alt="Pokemon mostrandose" /> 

   
                        </div>
                        <div className='-mt-6'>
                            <p className='font-sans text-black'> <strong>{pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1)}</strong> <span className='text-darkGrayishBlue'>{pokemonData.stats[0].base_stat} hp</span></p>
                            <p className='font-sans pb-3 text-darkGrayishBlue'>{pokemonData.base_experience} exp</p>
                            {/* {pokemonData && <p>{pokemonData.sprites.front_default}</p>} */}
                        </div>
                    </div>
                    <div className=' flex flex-row justify-center m-auto space-x-12 text-xs font-sans  border-t-black'>
                        
                        <p className='font-sans text-black' ><strong> {pokemonData.stats[1].base_stat}K </strong><br /> <br />Ataque </p>
                        <p className='font-sans text-black'><strong>{pokemonData.stats[3].base_stat}K </strong> <br /><br /> Ataque Especial</p>
                        <p className='font-sans text-black'><strong>{pokemonData.stats[2].base_stat}K </strong> <br /> <br />Defensa</p>
                        
                    </div>


                </div>
                
            }
        </>
    )

}

export default PokemonCard