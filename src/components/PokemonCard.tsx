import { PokemonData } from "../types/pokemon.ts";

type PokemonCardProps = {
  data: PokemonData;
  index: number;
};

const PokemonCard = ({ data, index }: PokemonCardProps) => {
  return (
    <div className="flex flex-col border rounded-xl p-6 shadow">
      <img
        className="h-52 w-auto object-contain"
        src={data.image}
        alt={data.name}
      />
      <div className="mt-4 space-y-1">
        <p>#{index}</p>
        <h3 className="font-bold">{data.name}</h3>
        <div className="flex space-x-2">
          {data.types.map((type) => {
            return (
              <div className="px-2 py-1 border rounded-lg font-medium">
                {type}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
