import { PokemonData } from "../../models/pokemon.ts";
import ListCard from "../commons/ListCard.tsx";
import CatchPokemon from "./CatchPokemon.tsx";
import EvolutionCard from "./EvolutionCard.tsx";

type PokemonDetailCardProps = {
  data: PokemonData | undefined;
};

const PokemonDetailCard = ({ data }: PokemonDetailCardProps) => {
  return (
    <div className="p-5 border rounded-xl flex flex-col">
      <img
        className="h-64 lg:h-72 w-auto object-contain"
        src={data?.image}
        alt={data?.name}
      />
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">{data?.name}</h2>
            <p className="text-gray-600">{data?.classification}</p>
          </div>
          <div>
            <CatchPokemon data={data} />
          </div>
        </div>
        <div className="flex space-x-2 mt-2">
          {data?.types.map((type) => {
            return <ListCard key={type}>{type}</ListCard>;
          })}
        </div>
        <div className="mt-2">
          <p>
            Height : {data?.height.minimum} - {data?.height.maximum}
          </p>
          <p>
            Weight : {data?.weight.minimum} - {data?.weight.maximum}
          </p>
        </div>
        {data?.evolutions && (
          <div>
            <h3 className="mt-4 mb-2 text-xl font-bold">Evolutions</h3>
            <div className="flex space-x-2">
              {data?.evolutions.map((evolution) => {
                return <EvolutionCard data={evolution} />;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonDetailCard;
