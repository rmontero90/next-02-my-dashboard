import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("next/navigation", () => ({
  notFound: vi.fn(() => {
    throw new Error("NOT_FOUND");
  }),
}));

import {
  getPokemon,
  getPokemons,
} from "../src/pokemons/api/pokemonsApi";

describe("pokemon API helpers", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("maps the list response into simple Pokemon records", async () => {
    const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(
        JSON.stringify({
          results: [
            { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
            { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
          ],
        }),
      ),
    );

    await expect(getPokemons(2, 0)).resolves.toEqual([
      { id: "1", name: "bulbasaur" },
      { id: "2", name: "ivysaur" },
    ]);
    expect(fetchMock).toHaveBeenCalledWith(
      "https://pokeapi.co/api/v2/pokemon?limit=2&offset=0",
    );
  });

  it("throws through notFound for an unknown Pokemon", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(null, { status: 404 }),
    );

    await expect(getPokemon("missingno")).rejects.toThrow("NOT_FOUND");
  });
});