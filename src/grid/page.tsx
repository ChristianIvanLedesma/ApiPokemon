import "../app.css"
import { useEffect, useState } from "react";

interface Pokemon {
  name: string;
  sprite: string;
  types: string[];
 

}

export default function Pokemones() {
  const [datos, setDatos] = useState<Pokemon[]>([]);
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    
    const obtenerDatos = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
      const data = await res.json();

      const detalles = await Promise.all(
        data.results.map(async (poke: { name: string; url: string }) => {
          const res = await fetch(poke.url);
          const info = await res.json();
          return {
            name: info.name,
            sprite: info.sprites.front_default,
            types: info.types.map((t: any) => t.type.name),
          };
        })
      );

      setDatos(detalles);
      setLoading(false)
    };
   
    obtenerDatos();
  }, []);

  return (
   <>
  
    <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[5px] h-[100vh] overflow-y-scroll scrollbar-hide">
      
  {loading ? (
    <li className="col-span-4 row-span-6 flex items-center justify-center">
      
      <img
        src="./pokebola.png"
        alt="pokemon"
        width={70}
        height={70}
        className="animate-spin "
      />
    </li>
  ) : (
    datos.map((pokemon, index) => {
      const tipo = pokemon.types[0];
      let hoverClass = "";

      if (tipo === "grass") {
        hoverClass = "hover:bg-green-200";
      } else if (tipo === "fire") {
        hoverClass = "hover:bg-red-200";
      } else if (tipo === "water") {
        hoverClass = "hover:bg-blue-200";
      } else {
        hoverClass = "hover:bg-gray-200";
      }

      return (
        <li
          key={index}
          className={`border border-indigo-400 text-center justify-center rounded-[5px] p-2 ${hoverClass} ${
            index <= 1 ? "lg:col-span-2 lg:row-span-2" : ""
          }`}
        >
          <p className="m-auto w-[200px] border-b-[1px] border-blue-200 capitalize">
            Pokémon: {pokemon.name}
          </p>
          <img
            className=" m-auto transition-transform duration-300 hover:scale-125 hover:rotate-6"
             src={pokemon.sprite || "./pokebola.png"}
            alt={pokemon.name}
            width={100}
            height={100}
          />
          {index}
        </li>
      );
    })
  )}
</ul>
</>
  );
  
}
