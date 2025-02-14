import { useEffect, useState } from "react";

import {
  charizardBoosterCards,
  mewtwoBoosterCards,
  mythicalIslandCards,
  pickachuBoosterCards,
} from "@/constants/boosterCards";
import { useClaimedPokemons } from "./useClaimedPokemons";
import { collection, onSnapshot } from "firebase/firestore";
import { localStorageAdapter } from "@/contexts/Storage/LocalStorageAdapter";
import { db } from "@/lib/firebase";
import { useAuth } from "@/hooks/useAuth";

import pokemons from "@/app/api/pokemons/pokemons.json";

const dialgaBoosterCards = pokemons
  .filter((pokemon) => ["SpaceTiming", "Dialga"].includes(pokemon.pack))
  .map((pokemon) => pokemon.id);
const palkiaBoosterCards = pokemons
  .filter((pokemon) => ["SpaceTiming", "Palkia"].includes(pokemon.pack))
  .map((pokemon) => pokemon.id);

export const usePokemonStatistics = () => {
  const { getClaimedPokemons } = useClaimedPokemons();
  const { user, isAuthenticated } = useAuth();

  const [charizardBoosterCardsObtained, setCharizardBoosterCardsObtained] =
    useState<string[]>([]);

  const [mewtwoBoosterCardsObtained, setMewtwoBoosterCardsObtained] = useState<
    string[]
  >([]);

  const [pickachuBoosterCardsObtained, setPickachuBoosterCardsObtained] =
    useState<string[]>([]);

  const [mythicalIslandCardsObtained, setMythicalIslandCardsCardsObtained] =
    useState<string[]>([]);

  const [dialgaBoosterCardsObtained, setDialgaBoosterCardsObtained] = useState<
    string[]
  >([]);

  const [palkiaBoosterCardsObtained, setPalkiaBoosterCardsObtained] = useState<
    string[]
  >([]);

  const handleCountBoosterCards = async (claimedPokemons: string[]) => {
    setCharizardBoosterCardsObtained(
      claimedPokemons.filter((card) => charizardBoosterCards.includes(card))
    );

    setPickachuBoosterCardsObtained(
      claimedPokemons.filter((card) => pickachuBoosterCards.includes(card))
    );

    setMewtwoBoosterCardsObtained(
      claimedPokemons.filter((card) => mewtwoBoosterCards.includes(card))
    );

    setMythicalIslandCardsCardsObtained(
      claimedPokemons.filter((card) => mythicalIslandCards.includes(card))
    );

    setDialgaBoosterCardsObtained(
      claimedPokemons.filter((card) => dialgaBoosterCards.includes(card))
    );

    setPalkiaBoosterCardsObtained(
      claimedPokemons.filter((card) => palkiaBoosterCards.includes(card))
    );
  };

  useEffect(() => {
    if (!isAuthenticated) {
      const onGetClaimedPokemons = async () => {
        localStorageAdapter.onUpdate(async () => {
          const claimedPokemons = await getClaimedPokemons();
          handleCountBoosterCards(claimedPokemons);
        });

        const claimedPokemons = await getClaimedPokemons();
        handleCountBoosterCards(claimedPokemons);
      };

      onGetClaimedPokemons();
      return;
    }

    const collectionRef = collection(db, user.uid);
    onSnapshot(collectionRef, (snapshot) => {
      const document = snapshot.docs.map((doc) => doc.data());
      handleCountBoosterCards(document[0].claimedCards);
    });
  }, [getClaimedPokemons, isAuthenticated, user?.uid]);

  return {
    charizardBoosterCardsObtained,
    charizardBoosterCards,

    mewtwoBoosterCardsObtained,
    mewtwoBoosterCards,

    pickachuBoosterCardsObtained,
    pickachuBoosterCards,

    mythicalIslandCardsObtained,
    mythicalIslandCards,

    dialgaBoosterCardsObtained,
    dialgaBoosterCards,

    palkiaBoosterCardsObtained,
    palkiaBoosterCards,
  };
};
