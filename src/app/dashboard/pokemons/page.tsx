import { RandomPokemonList } from "@/pokemons";
import { Loading } from "@/components/Loading";
import { Metadata } from "next";
import { Suspense } from "react";

export async function generateMetadata(): Promise<Metadata> {
  try {
    return {
      title: "Pokemons",
      description: "SEO Pokemon List",
    };
  } catch (error) {
    return {
      title: "Pokemons",
      description: "SEO Pokemon Description",
    };
  }
}

export default function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-4xl my-2">Pokemon List</span>
      <Suspense fallback={<Loading />}>
        <RandomPokemonList />
      </Suspense>
    </div>
  );
}
