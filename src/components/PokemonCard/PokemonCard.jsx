import { useState, useEffect } from "react";
// const CONST_ENDPOINT_NUM_POKEMON = `https://pokeapi.co/api/v2/pokemon/`

function PokemonCard() {
  // ---> Esta bien inicializar el componente, pero deberias hacerlo con la funcion que genere el numero ramdon
  //      ya que luego vuelves a usar ese mismo codigo en otras partes
  const [contador, setContador] = useState(
    Math.floor(Math.random() * (150 - 1) + 1)
  );
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(false);

  const cambiarPokemon = () => {
    setContador(Math.floor(Math.random() * (150 - 1) + 1));
  };

  const cogerPokemon = async (contador) => {
    try {
      console.log("Hola que tal " + contador);
      setLoading(true);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${contador}`
      );

      if (response.ok) {
        const data = await response.json();
        setPokemonData(data);
      } else {
        throw new Error("Error al cargar el Pokémon");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // ---> El fetch esta bien, pero metelo dentro de una funcion que la llames dentro del useEffect, haz control de errores dentro de la funcion
    cogerPokemon(contador);
  }, [contador]);

  // ---> Quita lo que no uses
  // ---> Puedes dar los estilos correspondientes con <strong> y <br />, usando tailwind
  return (
    <>
      {loading ? (
        <div className="flex flex-col justify-center items-center w-80 h-96">
          <svg
            className="animate-spin mx-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="100"
            height="100"
            color="#fff"
            fill="none"
          >
            <path
              d="M18.001 20C16.3295 21.2558 14.2516 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 12.8634 21.8906 13.7011 
                        21.6849 14.5003C21.4617 15.3673 20.5145 15.77 19.6699 15.4728C18.9519 15.2201 18.6221 14.3997 18.802 13.66C18.9314 13.1279 19 12.572 19 12C19 8.13401 15.866 5 
                        12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C13.3197 19 14.554 18.6348 15.6076 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ) : (
        pokemonData && (
          <>
            <div className="flex flex-col justify-center bg-white w-80 h-96 align-middle rounded-3xl drop-shadow-2xl shadow-2xl m-5">
              <div className="relative bg-white rounded-t-3xl flex flex-col justify-center border-b-2 border-solid ">
                <div>
                  <img
                    className="absolute top-0 m-0 rounded-t-3xl justify-center"
                    src="./src/assets/bg-pattern-card.svg"
                    alt="Parte superior de la carta"
                  />
                </div>

                <div className="flex flex-row justify-center m-auto w-64 h-64 ">
                  <img
                    className="relative bg-white rounded-full  m-6 w-3/4 h-3/4 ring-8 ring-white"
                    src={`${pokemonData?.sprites.other.dream_world.front_default}`}
                    alt=" "
                  />
                </div>
                <div className="-mt-6">
                  <p className="flex flex-row space-x-2  font-sans items-center align-middle justify-center">
                    <p className="font-bold capitalize text-black">
                      {pokemonData?.name}
                    </p>
                    <span className="text-darkGrayishBlue">
                      {pokemonData?.stats[0].base_stat} hp
                    </span>
                  </p>
                  <p className="font-sans pb-3 text-darkGrayishBlue">
                    {pokemonData?.base_experience} exp
                  </p>
                </div>
              </div>
              <div className=" flex flex-row justify-center m-auto space-x-12 text-xs font-sans  border-t-black ">
                <div className="flex flex-col font-sans text-black text-wrap">
                  <p className="font-bold pb-2">
                    {pokemonData?.stats[1].base_stat}K
                  </p>
                  <p>Ataque</p>
                </div>
                <div className="flex flex-col  font-sans text-black">
                  <p className="font-bold pb-2">
                    {pokemonData?.stats[3].base_stat}K
                  </p>
                  <p>Ataque Especial</p>
                </div>
                <div className="flex flex-col font-sans text-black">
                  <p className="font-bold pb-2">
                    {pokemonData?.stats[2].base_stat}K
                  </p>
                  <p>Defensa</p>
                </div>
              </div>
            </div>
            <div className="p-8 flex flex-col align-middle items-center ">
              <button
                className="disabled:hidden disabled:pointer-events-none active:scale-90 rounded-lg border py-3 px-6 text-base font-medium flex flex-row 
                                  hover:border-gray-300 bg-darkGray border-b-veryDarkDesaturated "
                onClick={cambiarPokemon}
              >
                Cambiar Pokemon
              </button>
            </div>
          </>
        )
      )}
    </>
  );
}

export default PokemonCard;
