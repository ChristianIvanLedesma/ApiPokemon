import "./index.css"
import Pokemones from "./grid/page"


function App() {
 
  return (
    <>
      <div>
        <div className="w-full flex justify-center items-center py-4 ">
          <img src="/ApiPokemon/titulo.png" alt="Título" className="max-w-xs w-full h-auto drop-shadow-xl/50 " />
        </div>
        <Pokemones />
      </div>
      
    </>
  )
}

export default App
