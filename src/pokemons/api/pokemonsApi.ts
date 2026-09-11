import { notFound } from "next/navigation";
import { PokemonsResponse, SimplePokemon, Pokemon } from "@/pokemons";

export const getPokemons = async (
  limit = 20,
  offset = 0,
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  // throw new Error("Error desconocido. ");

  return pokemons;
};

export const getPokemon = async (name: string): Promise<Pokemon> => {
  try {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
      // cache: "force-cache",
      next: {
        revalidate: 60 * 60 * 30 * 6,
      },
    }).then((resp) => resp.json());

    return pokemon;
  } catch (error) {
    console.error({ error });
    notFound();
  }
};
