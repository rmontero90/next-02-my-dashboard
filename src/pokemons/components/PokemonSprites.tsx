import { Pokemon } from "../interfaces/pokemon";
import { SpritePanel } from "./SpritePanel";

interface Props {
  pokemon: Pokemon;
}

export const PokemonSprites = ({ pokemon }: Props) => {
  return (
    <div className="flex w-full flex-wrap gap-4 px-2">
      <SpritePanel
        title="Regular Sprites"
        images={[pokemon.sprites.front_default, pokemon.sprites.back_default]}
        pokemonName={pokemon.name}
      />
      <SpritePanel
        title="Shiny Sprites"
        images={[pokemon.sprites.front_shiny, pokemon.sprites.back_shiny]}
        pokemonName={pokemon.name}
      />
    </div>
  );
};
