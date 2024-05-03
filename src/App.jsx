import PokemonCard from "./components/PokemonCard/PokemonCard";

// ---> Quita el codigo que no uses
// ---> Si el componente no tiene child usa el auto-cerrado
function App() {
  return (
    <>
      <body className="max-w-1280 my-0 mx-auto p-8 text-center bg-darkCyann min-w-min min-h-screen flex flex-col items-center justify-center">
        <div></div>
        <PokemonCard />
        <div></div>
      </body>
    </>
  );
}

export default App;
