import { TbEye, TbTrash } from "react-icons/tb";
import { Link } from "react-router-dom";
import { LocalPokemonData } from "../../models/pokemon.ts";
import ListCard from "../commons/ListCard.tsx";

type MyPokemonCardProps = {
  data: LocalPokemonData;
  index: number;
  handleReleasePokemon: (index: number) => void;
};

const MyPokemonCard = ({
  data,
  index,
  handleReleasePokemon,
}: MyPokemonCardProps) => {
  return (
    <div className="flex flex-col border rounded-xl p-6 shadow">
      <div className="flex space-x-1 justify-end">
        <Link
          to={`/pokemon/${data.name.toLowerCase()}`}
          className="border rounded-full p-1 hover:shadow"
          title="View details"
        >
          <TbEye />
        </Link>
        <button
          className="border bg-red-600 text-white rounded-full p-1 hover:shadow"
          onClick={() => handleReleasePokemon(index)}
          title="Release Pokémon"
        >
          <TbTrash />
        </button>
      </div>
      <img
        className="h-52 w-auto object-contain"
        src={data.image}
        alt={data.name}
      />
      <div className="mt-4">
        <p className="text-sm text-gray-600">#{index + 1}</p>
        <h2 className="font-bold">{data.nickname}</h2>
        <p className="text-gray-700">{data.name}</p>
        <div className="flex mt-2 space-x-2">
          {data.types.map((type) => {
            return <ListCard key={type}>{type}</ListCard>;
          })}
        </div>
      </div>
    </div>
  );
};

export default MyPokemonCard;
