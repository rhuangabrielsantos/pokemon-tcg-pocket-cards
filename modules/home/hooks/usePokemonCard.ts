import { useEffect, useMemo, useState } from "react";

import { IPokemon } from "@/app/api/pokemons/route";
import { useClaimedPokemons } from "./useClaimedPokemons";

interface IUsePokemonCardProps {
  pokemon: IPokemon;
  claimedPokemons: string[];
}

export const usePokemonCard = ({
  pokemon,
  claimedPokemons,
}: IUsePokemonCardProps) => {
  const { getClaimedPokemons, setClaimedPokemons } = useClaimedPokemons();

  const [isClaimed, setIsClaimed] = useState(false);

  const boosterPackSrc = useMemo(() => {
    const boosters = {
      Mewtwo: ["/mewtwo.jpg"],
      Charizard: ["/charizard.jpg"],
      Pikachu: ["/pikachu.jpg"],
      Promo: ["/promo.webp"],
      Any: ["/mewtwo.jpg", "/charizard.jpg", "/pikachu.jpg"],
      "Mythical Island": ["/mytical-island.png"],
    };

    return boosters[pokemon.pack as keyof typeof boosters];
  }, [pokemon.pack]);

  const handleClaimPokemon = async () => {
    const pokemons = await getClaimedPokemons();

    setClaimedPokemons([...pokemons, pokemon.id]);
    setIsClaimed(true);
  };

  const handleReleasePokemon = async () => {
    const pokemons = await getClaimedPokemons();

    setClaimedPokemons(pokemons.filter((id) => id !== pokemon.id));
    setIsClaimed(false);
  };

  useEffect(() => {
    setIsClaimed(claimedPokemons.includes(pokemon.id));
  }, [claimedPokemons, pokemon.id]);

  return {
    isClaimed,
    boosterPackSrc,
    handleClaimPokemon,
    handleReleasePokemon,
  };
};
