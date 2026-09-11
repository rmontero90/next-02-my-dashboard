import { connection } from "next/server";
import { getRandomPokemons } from "../api/pokemonsApi";
import { PokemonGrid } from "./PokemonGrid";

export const RandomPokemonList = async () => {
  await connection();
  const pokemons = await getRandomPokemons(20, 151);

  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
};
