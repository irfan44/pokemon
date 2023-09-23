import React, { useState } from "react";
import { LocalPokemonData, PokemonData } from "../../models/pokemon.ts";
import { getPokemons, storePokemons } from "../../utils/localPokemons.ts";
import Modal from "../commons/Modal.tsx";

type CatchPokemonButtonProps = {
  data: PokemonData | undefined;
};

const CatchPokemon = ({ data }: CatchPokemonButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCatched, setIsCatched] = useState(false);
  const [nickname, setNickname] = useState("");

  const catchPokemons = (pokemonData: PokemonData | undefined) => {
    const localPokemons = getPokemons();

    if (localPokemons.length > 0) {
      localPokemons.push({
        id: Date.now().toString(),
        name: pokemonData?.name,
        image: pokemonData?.image,
        types: pokemonData?.types,
        nickname: nickname !== "" ? nickname : pokemonData?.name,
      } as LocalPokemonData);
      storePokemons(localPokemons);
    } else {
      const catchedPokemons: LocalPokemonData[] = [];
      catchedPokemons.push({
        id: Date.now().toString(),
        name: pokemonData?.name,
        image: pokemonData?.image,
        types: pokemonData?.types,
        nickname: nickname !== "" ? nickname : pokemonData?.name,
      } as LocalPokemonData);
      storePokemons(catchedPokemons);
    }
  };

  const handleSaveCatch = (
    pokemonData: PokemonData | undefined,
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    catchPokemons(pokemonData);
    setIsOpen(false);
  };

  const handleCatchPokemons = () => {
    const chance = Math.random();
    if (chance > 0.5) {
      setIsOpen(true);
      setIsCatched(true);
    } else {
      setIsOpen(true);
      setIsCatched(false);
    }
  };

  return (
    <>
      <button
        className="flex items-center space-x-2 p-2 border-black border-2 rounded-xl bg-yellow-300"
        onClick={() => handleCatchPokemons()}
      >
        <img src="/pokeball.png" alt="Pokéball Icon" width={25} />
        <span className="font-bold">Catch!</span>
      </button>
      <Modal
        title={isCatched ? `${data?.name} catched!` : `The ${data?.name} fled!`}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="flex flex-col gap-4 mt-4 justify-center">
          <img
            className="h-52 w-auto object-contain"
            src={isCatched ? data?.image : "/failed.webp"}
            alt={isCatched ? data?.name : "Failed"}
          />
          {isCatched && (
            <form
              className="flex flex-col w-full"
              onSubmit={(event) => handleSaveCatch(data, event)}
            >
              <p className="mb-2 font-medium">Nickname</p>
              <input
                className="border px-2 py-1 rounded-lg"
                value={nickname}
                placeholder={data?.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNickname(e.target.value)
                }
              />
              <button
                className="bg-green-600 py-2 text-white font-bold rounded-xl mt-4"
                type="submit"
              >
                Save
              </button>
            </form>
          )}
          {!isCatched && (
            <button
              className="bg-green-600 py-2 text-white font-bold rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              Try Again
            </button>
          )}
        </div>
      </Modal>
    </>
  );
};

export default CatchPokemon;
