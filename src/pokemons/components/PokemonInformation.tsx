import { Pokemon } from "../interfaces/pokemon";
import { InfoPanel } from "./InfoPanel";

interface Props {
  pokemon: Pokemon;
  description: string;
  gender: string;
}

export const PokemonInformation = ({ pokemon, description, gender }: Props) => {
  return (
    <div className="flex w-full flex-wrap gap-4 px-2">
      <InfoPanel className="w-full">
        <p className="text-sm text-gray-600">Description</p>
        <p className="mt-2 text-base leading-6 text-slate-700">{description}</p>
      </InfoPanel>

      <InfoPanel>
        <p className="text-sm text-gray-600">Abilities</p>
        <ul className="mt-2 text-base text-slate-700">
          {pokemon.abilities.map(({ ability, is_hidden }) => (
            <li key={ability?.name} className="capitalize">
              {ability?.name}
              {is_hidden ? " (hidden)" : ""}
            </li>
          ))}
        </ul>
      </InfoPanel>

      <InfoPanel>
        <p className="text-sm text-gray-600">Gender</p>
        <p className="mt-2 text-base text-slate-700">{gender}</p>
      </InfoPanel>

      <InfoPanel>
        <p className="text-sm text-gray-600">Types</p>
        <div className="flex text-base font-medium text-navy-700">
          {pokemon.types.map((type) => (
            <p key={type.slot} className="mr-2 capitalize">
              {type.type.name}
            </p>
          ))}
        </div>
      </InfoPanel>

      <InfoPanel>
        <p className="text-sm text-gray-600">Peso</p>
        <span className="flex text-base font-medium text-navy-700">
          {pokemon.weight}
        </span>
      </InfoPanel>
    </div>
  );
};
