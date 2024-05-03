import PokemonCard from "./components/PokemonCard/PokemonCard";



// ---> Quita el codigo que no uses
// ---> Si el componente no tiene child usa el auto-cerrado
function App() {
  return (
    <>
      <body className="max-w-1280 my-0 mx-auto p-8 text-center bg-darkCyann min-w-min min-h-screen flex flex-col items-center justify-center">
        <div className="">
          {/* <svg width="978" height="978" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1=".779%" x2="50%" y2="100%" id="a">
        <stop stopColor="#0989B4" stopOpacity="0" offset="0%"/><stop stopColor="#53FFEE" offset="99.94%"/>
        </linearGradient></defs><ellipse fill="url(#a)" transform="rotate(-135 489 489)" cx="489" cy="489" rx="489" ry="488" fillRule="evenodd" opacity=".5"/></svg> */}
        </div>

        <PokemonCard></PokemonCard>

        <div className="">
          {/* <svg width="978" height="978" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1=".779%" x2="50%" y2="100%" id="a">
        <stop stopColor="#0989B4" stopOpacity="0" offset="0%"/><stop stopColor="#53FFEE" offset="99.94%"/>
        </linearGradient></defs><ellipse fill="url(#a)" transform="scale(1 -1) rotate(45 1669.55 0)" cx="489" cy="489" rx="489" ry="488" fillRule="evenodd" opacity=".25"/></svg> */}
        </div>
      </body>
    </>
  );
}

export default App;
