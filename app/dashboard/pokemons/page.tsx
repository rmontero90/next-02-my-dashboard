import { PokemonGrid, getPokemons } from "@/pokemons";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  try {
    return {
      title: `151 Pokemons`,
      description: "SEO Pokemon List",
    };
  } catch (error) {
    return {
      title: `151 Pokemons`,
      description: "SEO Pokemon Description",
    };
  }
}

export default async function PokemonsPage() {
  "use cache";
  const pokemons = await getPokemons(151);
  return (
    <>
      <div className="flex flex-col">
        <span className="text-4xl my-2">Pokemon List</span>
        <div className="flex flex-wrap gap-10 items-center justify-center">
          <PokemonGrid pokemons={pokemons} />
        </div>
      </div>
    </>
  );
}
