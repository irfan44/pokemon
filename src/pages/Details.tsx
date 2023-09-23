import { useQuery } from "@apollo/client";
import { Helmet } from "react-helmet";
import { TbChevronLeft } from "react-icons/tb";
import { useNavigate, useParams } from "react-router-dom";
import LoadingPlaceholder from "../components/commons/LoadingPlaceholder.tsx";
import AttacksCard from "../components/pokemonDetails/AttacksCard.tsx";
import AttributeCard from "../components/pokemonDetails/AttributeCard.tsx";
import PokemonDetailCard from "../components/pokemonDetails/PokemonDetailCard.tsx";
import { PokemonDetailResponse } from "../models/pokemon.ts";
import { GET_POKEMON_BY_NAME } from "../queries/pokemon.ts";

const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const { loading, data } = useQuery<PokemonDetailResponse>(
    GET_POKEMON_BY_NAME,
    {
      variables: { name: name },
    },
  );

  const handleBackButton = () => {
    navigate(-1);
  };

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
        <title>{data?.pokemon.name} | Pokédex</title>
      </Helmet>
      <div className="mb-6 w-fit">
        <button
          className="flex items-center space-x-1"
          onClick={handleBackButton}
        >
          <TbChevronLeft className="mt-0.5" />
          <span>Back</span>
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <PokemonDetailCard data={data?.pokemon} />
        <div className="flex flex-col gap-4">
          <AttacksCard
            title="Fast Attacks"
            attacks={data?.pokemon.attacks.fast}
          />
          <AttacksCard
            title="Special Attacks"
            attacks={data?.pokemon.attacks.special}
          />
          <AttributeCard
            title="Resistances"
            attribute={data?.pokemon.resistant}
          />
          <AttributeCard
            title="Weaknesses"
            attribute={data?.pokemon.weaknesses}
          />
        </div>
      </div>
    </>
  );
};

export default Details;
