import Image from "next/image";
import { Pokemon } from "../interfaces/pokemon";

interface Props {
  pokemon: Pokemon;
}

export const PokemonHeader = ({ pokemon }: Props) => {
  return (
    <div className="mb-8 mt-2 w-full">
      <h1 className="px-2 text-xl font-bold capitalize text-slate-700">
        #{pokemon.id} {pokemon.name}
      </h1>
      <div className="flex flex-col items-center justify-center">
        <Image
          src={pokemon.sprites.other?.dream_world.front_default ?? ""}
          width={150}
          height={150}
          alt={`Imagen del pokemon ${pokemon.name}`}
          className="mb-5 h-48 w-48"
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
  );
};