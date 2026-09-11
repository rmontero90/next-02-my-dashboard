import { Pokemon, PokemonSpecies } from "../interfaces/pokemon";
import { getGenderLabel, getPokemonDescription } from "../utils/pokemonFormatters";
import { PokemonHeader } from "./PokemonHeader";
import { PokemonInformation } from "./PokemonInformation";
import { PokemonSprites } from "./PokemonSprites";

interface Props {
  pokemon: Pokemon;
  species: PokemonSpecies;
}

export const PokemonDetails = ({ pokemon, species }: Props) => {
  const description = getPokemonDescription(species.flavor_text_entries);
  const gender = getGenderLabel(species.gender_rate);

  return (
    <div className="mt-5 flex flex-col items-center text-slate-800">
      <div className="relative flex w-full max-w-3xl flex-col items-center rounded-[20px] bg-white bg-clip-border p-3 shadow-lg sm:p-5">
        <PokemonHeader pokemon={pokemon} />
        <PokemonInformation
          pokemon={pokemon}
          description={description}
          gender={gender}
        />
        <PokemonSprites pokemon={pokemon} />
      </div>
    </div>
  );
};