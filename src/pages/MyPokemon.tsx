import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { TbPokeball, TbTrash } from "react-icons/tb";
import PageHeader from "../components/layouts/PageHeader.tsx";
import MyPokemonList from "../components/myPokemons/MyPokemonList.tsx";
import { LocalPokemonData } from "../models/pokemon.ts";
import {
  getPokemons,
  releaseAllPokemons,
  storePokemons,
} from "../utils/localPokemons.ts";

const MyPokemon = () => {
  const [pokemons, setPokemons] = useState<LocalPokemonData[]>();

  const handleReleasePokemon = (pokemonIndex: number) => {
    const localPokemons = getPokemons();
    const newLocalPokemons = localPokemons.filter((_, index) => {
      return index !== pokemonIndex;
    });
    storePokemons(newLocalPokemons);
    setPokemons(newLocalPokemons);
  };

  const handleReleaseAllPokemons = () => {
    releaseAllPokemons();
    setPokemons(getPokemons);
  };

  useEffect(() => {
    setPokemons(getPokemons());
  }, []);

  return (
    <>
      <Helmet>
        <title>My Pokémon | Pokédex</title>
      </Helmet>
      <PageHeader title="My Pokémon" icon={<TbPokeball />}>
        <button
          className="flex items-center space-x-2 p-2 text-white rounded-xl bg-red-600"
          onClick={handleReleaseAllPokemons}
        >
          <TbTrash />
          <span className="text-sm">Release All</span>
        </button>
      </PageHeader>
      <MyPokemonList
        data={pokemons}
        handleReleasePokemon={handleReleasePokemon}
      />
    </>
  );
};

export default MyPokemon;
