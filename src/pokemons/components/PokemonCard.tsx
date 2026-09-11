import Link from "next/link";
import Image from "next/image";
import { SimplePokemon } from "../interfaces/simple-pokemon";

interface Props {
  pokemon: SimplePokemon;
  isFirst?: boolean;
}

export const PokemonCard = ({ pokemon, isFirst = false }: Props) => {
  const { name } = pokemon;

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col justify-center items-center text-center p-6 bg-gray-800 border-b">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
            width={100}
            height={100}
            alt={pokemon.name}
            loading={isFirst ? "eager" : "lazy"}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemons/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              More info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
