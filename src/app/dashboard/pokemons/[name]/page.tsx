import { getPokemon, getPokemonSpecies, getPokemons } from "@/pokemons";
import { PokemonDetails } from "@/pokemons/components/PokemonDetails";
import { Loading } from "@/components/Loading";
import { Metadata } from "next";
import { Suspense } from "react";

interface Props {
  params: Promise<{
    name: string;
  }>;
}

export async function generateStaticParams() {
  const staticPokemons = await getPokemons(151);

  return staticPokemons.map(({ name }) => ({ name }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;

  try {
    const { id: pokemonId, name: pokemonName } = await getPokemon(name);
    return {
      title: `#${pokemonId} - ${pokemonName}`,
      description: "SEO Pokemon Description",
    };
  } catch {
    return {
      title: `Pokemon`,
      description: "SEO Pokemon Description",
    };
  }
}

export default async function PokemonPage({ params }: Props) {
  const { name } = await params;

  return (
    <Suspense fallback={<Loading />}>
      <PokemonDetailsContent name={name} />
    </Suspense>
  );
}

async function PokemonDetailsContent({ name }: { name: string }) {
  const [pokemon, species] = await Promise.all([
    getPokemon(name),
    getPokemonSpecies(name),
  ]);

  return <PokemonDetails pokemon={pokemon} species={species} />;
}
