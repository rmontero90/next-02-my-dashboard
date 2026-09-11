import { SimplePokemon } from "../interfaces/simple-pokemon";
import { PokemonCard } from "./PokemonCard";

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <>
      {pokemons.map((pokemon, index) => (
        <PokemonCard
          key={`${pokemon.id}-${pokemon.name}`}
          pokemon={pokemon}
          isFirst={index === 0}
        />
      ))}
    </>
  );
};
