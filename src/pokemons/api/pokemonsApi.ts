import { notFound } from "next/navigation";
import { randomInt } from "node:crypto";
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

  return pokemons;
};

export const getRandomPokemons = async (
  limit = 20,
  total = 151,
): Promise<SimplePokemon[]> => {
  const maxOffset = total - limit;
  const offset = randomInt(0, maxOffset + 1);

  return getPokemons(limit, offset);
};

export const getPokemon = async (name: string): Promise<Pokemon> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
    // cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 30 * 6,
    },
  });

  if (!response.ok) {
    notFound();
  }

  return response.json();
};
