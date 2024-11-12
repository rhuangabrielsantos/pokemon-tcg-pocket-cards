import { useEffect, useMemo, useState } from "react";

import { IPokemon } from "@/app/api/pokemons/route";
import { useStorageContext } from "@/contexts/Storage";

interface IUsePokemonCardProps {
  pokemon: IPokemon;
}

export const usePokemonCard = ({ pokemon }: IUsePokemonCardProps) => {
  const { state: storage } = useStorageContext();

  const [isClaimed, setIsClaimed] = useState(false);

  const boosterPackSrc = useMemo(() => {
    const boosters = {
      Mewtwo: ["/mewtwo.jpg"],
      Charizard: ["/charizard.jpg"],
      Pikachu: ["/pikachu.jpg"],
      Promo: ["/promo.webp"],
      Any: ["/mewtwo.jpg", "/charizard.jpg", "/pikachu.jpg"],
    };

    return boosters[pokemon.pack as keyof typeof boosters];
  }, [pokemon.pack]);

  const handleClaimPokemon = () => {
    const pokemons = storage.getItem<string[]>("claimed-pokemons") ?? [];

    storage.setItem("claimed-pokemons", [...pokemons, pokemon.id]);
    setIsClaimed(true);
  };

  const handleReleasePokemon = () => {
    const pokemons = storage.getItem<string[]>("claimed-pokemons") ?? [];

    storage.setItem(
      "claimed-pokemons",
      pokemons.filter((id) => id !== pokemon.id)
    );
    setIsClaimed(false);
  };

  useEffect(() => {
    const pokemons = storage.getItem<string[]>("claimed-pokemons") ?? [];

    setIsClaimed(pokemons.includes(pokemon.id));
  }, [pokemon.id, storage]);

  return {
    isClaimed,
    boosterPackSrc,
    handleClaimPokemon,
    handleReleasePokemon,
  };
};
