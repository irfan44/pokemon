import { Link } from "react-router-dom";
import { BasicPokemonData } from "../../models/pokemon.ts";

type EvolutionCardProps = {
  data: BasicPokemonData;
};

const EvolutionCard = ({ data }: EvolutionCardProps) => {
  return (
    <Link
      to={`/pokemon/${data.name}`}
      key={data.id}
      className="border rounded-xl p-2 hover:shadow"
    >
      <img
        className="h-24 w-24 object-contain"
        src={data.image}
        alt={data.name}
      />
      <p className="font-medium">{data.name}</p>
    </Link>
  );
};

export default EvolutionCard;
