import { useState, useEffect } from 'react';
// const CONST_ENDPOINT_NUM_POKEMON = `https://pokeapi.co/api/v2/pokemon/`


function PokemonCard({rnd}) {
    
    const [pokemonData,setPokemonData] = useState(null)
    const [loading, setLoading] = useState(false)

        useEffect(() => {
            setLoading(true)
            fetch(`https://pokeapi.co/api/v2/pokemon/${rnd}`)
            .then(response => response.json())
            .then(data => {
                setPokemonData(data)
                setLoading(false)
            
        })
        },[rnd])
    
    // if (setLoading ===true) return  <svg className="animate-spin mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    // <path d="M18.001 20C16.3295 21.2558 14.2516 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 12.8634 21.8906 13.7011 
    // 21.6849 14.5003C21.4617 15.3673 20.5145 15.77 19.6699 15.4728C18.9519 15.2201 18.6221 14.3997 18.802 13.66C18.9314 13.1279 19 12.572 19 12C19 8.13401 15.866 5 
    // 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C13.3197 19 14.554 18.6348 15.6076 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    // </svg>
    return(
        <>
            {
                loading ? <div className='flex flex-col justify-center items-center w-80 h-96'>

                        <svg className="animate-spin mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" color="#fff" fill="none">
                        <path d="M18.001 20C16.3295 21.2558 14.2516 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 12.8634 21.8906 13.7011 
                        21.6849 14.5003C21.4617 15.3673 20.5145 15.77 19.6699 15.4728C18.9519 15.2201 18.6221 14.3997 18.802 13.66C18.9314 13.1279 19 12.572 19 12C19 8.13401 15.866 5 
                        12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C13.3197 19 14.554 18.6348 15.6076 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg> 
                    </div>
                    : 
            
            pokemonData &&
                
                <div className='flex flex-col justify-center bg-white w-80 h-96 align-middle rounded-3xl drop-shadow-2xl shadow-2xl'>
                    
                    <div className='relative bg-white rounded-t-3xl flex flex-col justify-center border-b-2 border-solid '> 

                        <div>
                            <img  className='absolute top-0 m-0 rounded-t-3xl justify-center' src="./src/assets/bg-pattern-card.svg" alt="Parte superior de la carta" />
                        </div>

                        <div className='flex flex-row justify-center m-auto w-64 h-64 '>
                            
                            {/* <img className='relative bg-white rounded-full w-3/4 m-6 ring-offset-2 ring-4 ring-white' src={`${pokemonData.sprites.front_default}`} alt="Pokemon mostrandose" />  */}
                            <img className='relative bg-white rounded-full  m-6 w-3/4 h-3/4 ring-8 ring-white' src={`${pokemonData?.sprites.other.dream_world.front_default}`} alt=" " /> 

   
                        </div>
                        <div className='-mt-6'>
                            {/* if (pokemonData === false) {
                                <svg className="animate-spin mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                <path d="M18.001 20C16.3295 21.2558 14.2516 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 12.8634 21.8906 13.7011 
                                21.6849 14.5003C21.4617 15.3673 20.5145 15.77 19.6699 15.4728C18.9519 15.2201 18.6221 14.3997 18.802 13.66C18.9314 13.1279 19 12.572 19 12C19 8.13401 15.866 5 
                                12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C13.3197 19 14.554 18.6348 15.6076 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            }  */}

                            <p className='font-sans text-black capitalize'> <strong>{pokemonData?.name}</strong> <span className='text-darkGrayishBlue'>{pokemonData?.stats[0].base_stat} hp</span></p>
                            <p className='font-sans pb-3 text-darkGrayishBlue'>{pokemonData?.base_experience} exp</p>
                            {/* {pokemonData && <p>{pokemonData.sprites.front_default}</p>} */}
                        </div>
                    </div>
                    <div className=' flex flex-row justify-center m-auto space-x-12 text-xs font-sans  border-t-black'>
                        
                        <p className='font-sans text-black' ><strong> {pokemonData?.stats[1].base_stat}K </strong><br /> <br />Ataque </p>
                        <p className='font-sans text-black'><strong>{pokemonData?.stats[3].base_stat}K </strong> <br /><br /> Ataque Especial</p>
                        <p className='font-sans text-black'><strong>{pokemonData?.stats[2].base_stat}K </strong> <br /> <br />Defensa</p>
                        
                    </div>


                </div>
                
            }
            
        </>

    
    )
    
}

export default PokemonCard