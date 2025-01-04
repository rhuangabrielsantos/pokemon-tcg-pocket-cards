import { useState } from "react";

import {
  charizardBoosterCards,
  mewtwoBoosterCards,
  mythicalIslandCards,
  pickachuBoosterCards,
} from "@/constants/boosterCards";
import { useStorageContext } from "@/contexts/Storage";
import { useDidMount } from "@/hooks/useDidMount";

export const usePokemonStatistics = () => {
  const { state: storage } = useStorageContext();

  const [charizardBoosterCardsObtained, setCharizardBoosterCardsObtained] =
    useState<string[]>([]);

  const [mewtwoBoosterCardsObtained, setMewtwoBoosterCardsObtained] = useState<
    string[]
  >([]);

  const [pickachuBoosterCardsObtained, setPickachuBoosterCardsObtained] =
    useState<string[]>([]);

  const [mythicalIslandCardsObtained, setMythicalIslandCardsCardsObtained] =
    useState<string[]>([]);

  const handleCountBoosterCards = () => {
    setCharizardBoosterCardsObtained(
      storage
        .getItem<string[]>("claimed-pokemons")
        ?.filter((card) => charizardBoosterCards.includes(card)) ?? []
    );

    setPickachuBoosterCardsObtained(
      storage
        .getItem<string[]>("claimed-pokemons")
        ?.filter((card) => pickachuBoosterCards.includes(card)) ?? []
    );

    setMewtwoBoosterCardsObtained(
      storage
        .getItem<string[]>("claimed-pokemons")
        ?.filter((card) => mewtwoBoosterCards.includes(card)) ?? []
    );

    setMythicalIslandCardsCardsObtained(
      storage
        .getItem<string[]>("claimed-pokemons")
        ?.filter((card) => mythicalIslandCards.includes(card)) ?? []
    );
  };

  useDidMount(() => {
    storage.onUpdate(() => handleCountBoosterCards());

    handleCountBoosterCards();
  });

  return {
    charizardBoosterCardsObtained,
    charizardBoosterCards,

    mewtwoBoosterCardsObtained,
    mewtwoBoosterCards,

    pickachuBoosterCardsObtained,
    pickachuBoosterCards,

    mythicalIslandCardsObtained,
    mythicalIslandCards,
  };
};
