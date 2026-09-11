import { notFound } from "next/navigation";
import axios from "axios";
import { PokemonsResponse, SimplePokemon, Pokemon } from "@/pokemons";

export const pokemonApi = axios.create({
  baseURL: `https://pokeapi.co/api/v2`,
});

export const getPokemons = async (
  limit = 20,
  offset = 0,
): Promise<SimplePokemon[]> => {
  const { data: pokemonsData }: { data: PokemonsResponse } =
    await pokemonApi.get(`/pokemon?limit=${limit}&offset=${offset}`);

  const pokemons = pokemonsData.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export const getPokemon = async (name: string): Promise<Pokemon> => {
  try {
    // const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
    //   // cache: "force-cache",
    //   next: {
    //     revalidate: 60 * 60 * 30 * 6,
    //   },
    // }).then((resp) => resp.json());

    const { data: pokemonData }: { data: Pokemon } = await pokemonApi.get(
      `/pokemon/${name}`,
    );

    return pokemonData;
  } catch (error) {
    console.log(error);
    notFound();
  }
};
