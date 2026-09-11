import { describe, expect, it } from "vitest";
import {
  getGenderLabel,
  getPokemonDescription,
} from "../src/pokemons/utils/pokemonFormatters";

describe("getPokemonDescription", () => {
  it("returns the English description and removes API line breaks", () => {
    const description = getPokemonDescription([
      {
        flavor_text: "Descripción en español",
        language: { name: "es", url: "" },
      },
      {
        flavor_text: "A brave\nPokemon\f description",
        language: { name: "en", url: "" },
      },
    ]);

    expect(description).toBe("A brave Pokemon  description");
  });

  it("returns a fallback when no English description exists", () => {
    expect(getPokemonDescription([])).toBe("No description available.");
  });
});

describe("getGenderLabel", () => {
  it("returns Genderless for genderless Pokemon", () => {
    expect(getGenderLabel(-1)).toBe("Genderless");
  });

  it("formats the male and female distribution", () => {
    expect(getGenderLabel(1)).toBe("Male 87.5% / Female 12.5%");
  });
});