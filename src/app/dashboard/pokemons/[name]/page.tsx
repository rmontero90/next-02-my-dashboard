import { getPokemon, getPokemons } from "@/pokemons";
import { Metadata } from "next";
import Image from "next/image";
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
  } catch (error) {
    return {
      title: `Pokemon`,
      description: "SEO Pokemon Description",
    };
  }
}

export default async function PokemonPage({ params }: Props) {
  const { name } = await params;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PokemonDetailsContent name={name} />
    </Suspense>
  );
}

async function PokemonDetailsContent({ name }: { name: string }) {
  const pokemon = await getPokemon(name);

  return (
    <div className="flex mt-5 flex-col items-center text-slate-800">
      <div className="relative flex w-full max-w-3xl flex-col items-center rounded-[20px] bg-white bg-clip-border p-3 shadow-lg sm:p-5">
        <div className="mt-2 mb-8 w-full">
          <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
            #{pokemon.id} {pokemon.name}
          </h1>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={pokemon?.sprites.other?.dream_world.front_default ?? ""}
              width={150}
              height={150}
              alt={`Imagen del pokemon ${pokemon.name}`}
              className="mb-5 w-48 h-48"
            />

            <div className="flex flex-wrap">
              {pokemon.moves.map((move) => (
                <p key={move.move.name} className="mr-2 capitalize">
                  {move.move.name}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-full flex-wrap gap-4 px-2">
          <div className="flex w-full flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 drop-shadow-lg md:w-[calc(50%-0.5rem)]">
            <p className="text-sm text-gray-600">Types</p>
            <div className="text-base font-medium text-navy-700 flex">
              {pokemon.types.map((type) => (
                <p key={type.slot} className="mr-2 capitalize">
                  {type.type.name}
                </p>
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 drop-shadow-lg md:w-[calc(50%-0.5rem)]">
            <p className="text-sm text-gray-600">Peso</p>
            <span className="text-base font-medium text-navy-700 flex">
              {pokemon.weight}
            </span>
          </div>

          <div className="flex w-full flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 drop-shadow-lg md:w-[calc(50%-0.5rem)]">
            <p className="text-sm text-gray-600">Regular Sprites</p>
            <div className="flex flex-wrap justify-center">
              <Image
                src={pokemon.sprites.front_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>

          <div className="flex w-full flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 drop-shadow-lg md:w-[calc(50%-0.5rem)]">
            <p className="text-sm text-gray-600">Shiny Sprites</p>
            <div className="flex flex-wrap justify-center">
              <Image
                src={pokemon.sprites.front_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
