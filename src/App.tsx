import "./index.css"
import Pokemones from "./grid/page"


function App() {
 
  return (
    <>
      <div>
        <div className="w-full flex justify-center items-center py-4 ">
          <img src="./titulo.png" alt="Título" className="max-w-xs w-full h-auto " />
        </div>
        <Pokemones />
      </div>
      
    </>
  )
}

export default App
