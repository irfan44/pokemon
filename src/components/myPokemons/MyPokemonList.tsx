import { LocalPokemonData } from "../../models/pokemon.ts";
import MyPokemonCard from "./MyPokemonCard.tsx";

type MyPokemonListProps = {
  data: LocalPokemonData[] | undefined;
  handleReleasePokemon: (index: number) => void;
};
const MyPokemonList = ({ data, handleReleasePokemon }: MyPokemonListProps) => {
  if (data?.length === 0)
    return (
      <div className="flex items-center justify-center mt-72">
        <p>Pokémon not found!</p>
      </div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {data?.map((pokemon, index) => {
        return (
          <MyPokemonCard
            key={pokemon.id}
            data={pokemon}
            index={index}
            handleReleasePokemon={handleReleasePokemon}
          />
        );
      })}
    </div>
  );
};

export default MyPokemonList;
