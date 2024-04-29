import { useState} from 'react'
import PokemonCard from './components/PokemonCard/PokemonCard'  

function App() {

  const [contador, setContador] = useState(0);

  const cambiarPokemon = () => {
    setContador(num => num + 1);
  }


  return (
    <>
    
    <body className='max-w-1280 my-0 mx-auto p-8 text-center bg-darkCyann min-w-min min-h-screen flex flex-col items-center justify-center'>  
      
      <div className ='' >
        {/* <svg width="978" height="978" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1=".779%" x2="50%" y2="100%" id="a">
        <stop stopColor="#0989B4" stopOpacity="0" offset="0%"/><stop stopColor="#53FFEE" offset="99.94%"/>
        </linearGradient></defs><ellipse fill="url(#a)" transform="rotate(-135 489 489)" cx="489" cy="489" rx="489" ry="488" fillRule="evenodd" opacity=".5"/></svg> */}
      
           
      </div>

      <PokemonCard key={contador} />
      <div className='p-8' >
        
        <button className="active:scale-90 rounded-lg border py-3 px-6 text-base font-medium
          hover:border-gray-300 bg-darkGray border-b-veryDarkDesaturated" onClick={cambiarPokemon}>
          Cambiar Pokemon
        </button>

      </div>


      <div className=''>
        {/* <svg width="978" height="978" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1=".779%" x2="50%" y2="100%" id="a">
        <stop stopColor="#0989B4" stopOpacity="0" offset="0%"/><stop stopColor="#53FFEE" offset="99.94%"/>
        </linearGradient></defs><ellipse fill="url(#a)" transform="scale(1 -1) rotate(45 1669.55 0)" cx="489" cy="489" rx="489" ry="488" fillRule="evenodd" opacity=".25"/></svg> */}
        </div>
      </body>
    </>
  )
}

export default App
