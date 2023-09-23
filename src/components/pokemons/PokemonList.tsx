import InfiniteScroll from "react-infinite-scroll-component";
import { BasicPokemonData } from "../../models/pokemon.ts";
import LoadingPlaceholder from "../commons/LoadingPlaceholder.tsx";
import PokemonCard from "./PokemonCard.tsx";

type PokemonListProps = {
  data: BasicPokemonData[] | undefined;
  allPokemons: BasicPokemonData[] | undefined;
  fetchMore: () => void;
};

const PokemonList = ({ data, allPokemons, fetchMore }: PokemonListProps) => {
  if (data?.length === 0)
    return (
      <div className="flex items-center justify-center mt-72">
        <p>Pokémon not found!</p>
      </div>
    );

  return (
    <div>
      {data && allPokemons && (
        <InfiniteScroll
          className="pb-4"
          next={fetchMore}
          hasMore={allPokemons.length < 150}
          loader={
            <div className="flex items-center justify-center mt-4">
              <LoadingPlaceholder />
            </div>
          }
          dataLength={data?.length}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {data?.map((pokemon, index) => {
              return (
                <PokemonCard
                  key={pokemon.id}
                  data={pokemon}
                  index={index + 1}
                />
              );
            })}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default PokemonList;
