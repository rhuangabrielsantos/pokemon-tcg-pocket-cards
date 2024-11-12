"use client";

import { IPokemon } from "@/app/api/pokemons/route";
import { usePokemonCard } from "../hooks/usePokemonCard";
import Card from "@/components/ui/card";

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
