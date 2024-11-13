"use client";

import dynamic from "next/dynamic";

import { IPokemon } from "@/app/api/pokemons/route";
const Card = dynamic(() => import("@/components/ui/card"));

import { usePokemonCard } from "../hooks/usePokemonCard";

interface IPokemonCardProps {
  pokemon: IPokemon;
}

const PokemonCard = ({ pokemon }: IPokemonCardProps) => {
  const {
    isClaimed,
    boosterPackSrc,
    handleClaimPokemon,
    handleReleasePokemon,
  } = usePokemonCard({ pokemon });

  return isClaimed ? (
    <Card src={pokemon.image} onClick={handleReleasePokemon} />
  ) : (
    <Card
      src={pokemon.image}
      onClick={handleClaimPokemon}
      hasGrayScale
      boosters={boosterPackSrc}
    />
  );
};

export default PokemonCard;
