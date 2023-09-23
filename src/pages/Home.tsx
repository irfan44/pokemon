import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { TbHome2 } from "react-icons/tb";
import LoadingPlaceholder from "../components/commons/LoadingPlaceholder.tsx";
import PageHeader from "../components/layouts/PageHeader.tsx";
import PokemonList from "../components/pokemons/PokemonList.tsx";
import TypeFilter from "../components/pokemons/TypeFilter.tsx";
import { BasicPokemonData, PokemonsResponse } from "../models/pokemon.ts";
import { GET_POKEMONS } from "../queries/pokemon.ts";

const Home = () => {
  const [pokemons, setPokemons] = useState<BasicPokemonData[]>();
  const [allPokemons, setAllPokemons] = useState<BasicPokemonData[]>();
  const [selectedTypeFilter, setSelectedTypeFilter] = useState("");

  const { loading, data, fetchMore } = useQuery<PokemonsResponse>(
    GET_POKEMONS,
    {
      variables: { first: 15 },
    },
  );

  const handleFetchMore = () => {
    if (allPokemons) {
      fetchMore({ variables: { first: allPokemons.length + 30 } }).then(
        (response) => {
          setAllPokemons(response.data.pokemons);
          if (selectedTypeFilter !== "") {
            const filteredPokemons = filterPokemonsType(
              response.data.pokemons,
              selectedTypeFilter,
            );
            setPokemons(filteredPokemons);
          } else {
            setPokemons(response.data.pokemons);
          }
        },
      );
    }
  };

  const filterPokemonsType = (
    pokemonsData: BasicPokemonData[],
    type: string,
  ) => {
    const filteredPokemons: BasicPokemonData[] = [];
    pokemonsData.forEach((pokemon) => {
      if (pokemon.types.includes(type)) {
        filteredPokemons.push(pokemon);
      }
    });
    return filteredPokemons;
  };

  const handleSelectTypeFilter = (type: string) => {
    setSelectedTypeFilter(type);
    if (type !== "" && allPokemons) {
      const filteredPokemons = filterPokemonsType(allPokemons, type);
      setPokemons(filteredPokemons);
    } else {
      setPokemons(allPokemons);
    }
  };

  useEffect(() => {
    setAllPokemons(data?.pokemons);
    setPokemons(data?.pokemons);
  }, [data?.pokemons]);

  if (loading) {
    return (
      <div className="flex items-center justify-center mt-72">
        <LoadingPlaceholder />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Home | Pokédex</title>
      </Helmet>
      <PageHeader title="Home" icon={<TbHome2 />}>
        <TypeFilter handleSelectTypeFilter={handleSelectTypeFilter} />
      </PageHeader>
      <PokemonList
        data={pokemons}
        allPokemons={allPokemons}
        fetchMore={handleFetchMore}
      />
    </>
  );
};

export default Home;
