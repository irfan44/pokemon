import { PokemonData } from "../types/pokemon.ts";
import PokemonCard from "./PokemonCard.tsx";

type PokemonListProps = {
  data: PokemonData[] | undefined;
  loading?: boolean;
  fetchMore?: () => void;
};

const PokemonList = ({ data }: PokemonListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {data?.map((pokemon, index) => {
        return (
          <PokemonCard key={pokemon.id} data={pokemon} index={index + 1} />
        );
      })}
    </div>
  );
};

export default PokemonList;
