import Image from "next/image";
import { Pokemon } from "../interfaces/pokemon";
import { InfoPanel } from "./InfoPanel";

interface Props {
  pokemon: Pokemon;
}

export const PokemonHeader = ({ pokemon }: Props) => {
  const movesByMethod = pokemon.moves.reduce<Record<string, Pokemon["moves"]>>(
    (groups, move) => {
      const method = move.version_group_details[0]?.move_learn_method.name;
      const groupName = method || "Other";

      groups[groupName] ??= [];
      groups[groupName].push(move);

      return groups;
    },
    {},
  );

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

        <InfoPanel className="w-full md:w-full">
          <p className="text-sm font-semibold text-slate-700">Attacks</p>
          <div className="mt-2 h-80 space-y-4 overflow-y-auto pr-2 text-slate-700">
            {Object.entries(movesByMethod)
              .sort(([firstMethod], [secondMethod]) =>
                firstMethod.localeCompare(secondMethod),
              )
              .map(([method, moves]) => (
                <section key={method}>
                  <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-700">
                    {method.replaceAll("-", " ")}
                  </h2>
                  <ul className="mt-1 grid grid-cols-1 gap-x-6 gap-y-2 pl-4 text-base sm:grid-cols-2">
                    {[...moves]
                      .sort((firstMove, secondMove) =>
                        firstMove.move.name.localeCompare(secondMove.move.name),
                      )
                      .map((move) => (
                        <li
                          key={move.move.name}
                          className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3 capitalize"
                        >
                          <span>{move.move.name}</span>
                          {move.version_group_details[0]?.level_learned_at ? (
                            <span className="text-right text-xs font-medium tracking-wide text-gray-500 normal-case">
                              Lv.{" "}
                              {move.version_group_details[0].level_learned_at}
                            </span>
                          ) : null}
                        </li>
                      ))}
                  </ul>
                </section>
              ))}
          </div>
        </InfoPanel>
      </div>
    </div>
  );
};
