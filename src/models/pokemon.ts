export type PokemonsResponse = {
  pokemons: BasicPokemonData[];
};

export type PokemonDetailResponse = {
  pokemon: PokemonData;
};

export type AttacksType = {
  name: string;
  type: string;
};

export interface BasicPokemonData {
  id: string;
  name: string;
  image: string;
  types: string[];
}

export interface PokemonData extends BasicPokemonData {
  classification: string;
  attacks: {
    fast: AttacksType[];
    special: AttacksType[];
  };
  evolutions: BasicPokemonData[];
  height: {
    minimum: string;
    maximum: string;
  };
  weight: {
    minimum: string;
    maximum: string;
  };
  resistant: string[];
  weaknesses: string[];
}

export interface LocalPokemonData extends BasicPokemonData {
  nickname: string;
}
