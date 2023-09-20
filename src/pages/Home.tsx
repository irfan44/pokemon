import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../queries/pokemon.ts";
import { PokemonResponse } from "../types/pokemon.ts";
import PokemonList from "../components/PokemonList.tsx";

const Home = () => {
  const { data } = useQuery<PokemonResponse>(GET_POKEMONS, {
    variables: { first: 15 },
  });

  return (
    <>
      <PokemonList data={data?.pokemons} />
    </>
  );
};

export default Home;
