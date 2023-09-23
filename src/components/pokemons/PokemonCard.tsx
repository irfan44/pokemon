import { Link } from "react-router-dom";
import { BasicPokemonData } from "../../models/pokemon.ts";
import ListCard from "../commons/ListCard.tsx";

type PokemonCardProps = {
  data: BasicPokemonData;
  index: number;
};

const PokemonCard = ({ data, index }: PokemonCardProps) => {
  return (
    <Link
      to={`/pokemon/${data.name.toLowerCase()}`}
      className="flex flex-col border rounded-xl p-6 shadow hover:shadow-lg"
    >
      <img
        className="h-52 w-auto object-contain"
        src={data.image}
        alt={data.name}
      />
      <div className="mt-4 space-y-1">
        <p className="text-sm text-gray-400">#{index}</p>
        <h3 className="font-bold">{data.name}</h3>
        <div className="flex space-x-2">
          {data.types.map((type) => {
            return <ListCard key={type}>{type}</ListCard>;
          })}
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
