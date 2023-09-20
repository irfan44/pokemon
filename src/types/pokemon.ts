export type PokemonResponse = {
  pokemons: PokemonData[];
};

export type PokemonData = {
  id: string;
  name: string;
  image: string;
  types: string[];
};
