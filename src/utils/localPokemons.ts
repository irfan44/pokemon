import { LocalPokemonData } from "../models/pokemon.ts";

const getPokemons = () => {
  const localPokemons = localStorage.getItem("localPokemons");
  if (localPokemons) {
    return JSON.parse(localPokemons) as LocalPokemonData[];
  } else {
    return [] as LocalPokemonData[];
  }
};

const storePokemons = (catchedPokemons: LocalPokemonData[] | undefined) => {
  localStorage.setItem("localPokemons", JSON.stringify(catchedPokemons));
};

const releaseAllPokemons = () => {
  localStorage.removeItem("localPokemons");
};

export { getPokemons, storePokemons, releaseAllPokemons };
