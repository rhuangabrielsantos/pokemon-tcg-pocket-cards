"use client";

import Image from "next/image";

import { IPokemon } from "@/app/api/pokemons/route";
import { usePokemonCard } from "../hooks/usePokemonCard";

interface IPokemonCardProps {
  pokemon: IPokemon;
}

const PokemonCard = ({ pokemon }: IPokemonCardProps) => {
  const { isClaimed, handleClaimPokemon, handleReleasePokemon } =
    usePokemonCard({ pokemon });

  return isClaimed ? (
    <Image
      src={pokemon.image}
      alt={pokemon.name}
      className="object-cover rounded-lg cursor-pointer shadow-none transition-shadow duration-300 hover:shadow-[8px_8px_86px_39px_rgba(100,_100,_111,_0.2)]"
      width={367}
      height={512}
      onClick={handleReleasePokemon}
    />
  ) : (
    <button
      className="w-[210px] h-[292px] rounded-md border flex items-center justify-center shadow-none transition-shadow duration-300 hover:shadow-[8px_8px_86px_39px_rgba(100,_100,_111,_0.2)]"
      onClick={handleClaimPokemon}
    >
      <span className="font-sans font-bold text-4xl">
        {pokemon.id.split("-")[1]}
      </span>
    </button>
  );
};

export default PokemonCard;
