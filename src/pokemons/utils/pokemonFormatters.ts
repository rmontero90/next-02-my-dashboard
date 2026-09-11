import { FlavorTextEntry } from "../interfaces/pokemon";

export function getPokemonDescription(entries: FlavorTextEntry[]) {
  return (
    entries
      .find((entry) => entry.language.name === "en")
      ?.flavor_text.replace(/[\f\n]/g, " ") ?? "No description available."
  );
}

export function getGenderLabel(genderRate: number) {
  if (genderRate === -1) return "Genderless";

  return `Male ${((8 - genderRate) / 8) * 100}% / Female ${(genderRate / 8) * 100}%`;
}
