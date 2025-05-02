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

const triumphantLightCards = pokemons
  .filter((pokemon) => ["TriumphantLight"].includes(pokemon.pack))
  .map((pokemon) => pokemon.id);

const promoCards = pokemons
  .filter((pokemon) => ["Promo"].includes(pokemon.pack))
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

  const [
    triumphantLightBoosterCardsObtained,
    setTriumphantLightBoosterCardsObtained,
  ] = useState<string[]>([]);

  const [promoBoosterCardsObtained, setPromoBoosterCardsObtained] = useState<
    string[]
  >([]);

  const [totalCollected, setTotalCollected] = useState(0);
  const [percentComplete, setPercentComplete] = useState(0);
  const [rarePokemon, setRarePokemon] = useState(0);
  const [legendaryPokemon, setLegendaryPokemon] = useState(0);

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

    setTriumphantLightBoosterCardsObtained(
      claimedPokemons.filter((card) => triumphantLightCards.includes(card))
    );

    setPromoBoosterCardsObtained(
      claimedPokemons.filter((card) => promoCards.includes(card))
    );

    setTotalCollected(claimedPokemons.length);
    setPercentComplete(
      Math.round((claimedPokemons.length / pokemons.length) * 100)
    );

    setRarePokemon(
      claimedPokemons.filter((card) => {
        const pokemon = pokemons.find((p) => p.id === card);
        return pokemon?.rarity.startsWith("☆");
      }).length
    );
    setLegendaryPokemon(
      claimedPokemons.filter((card) => {
        const pokemon = pokemons.find((p) => p.id === card);
        return pokemon?.rarity.startsWith("★");
      }).length
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

    triumphantLightBoosterCardsObtained,
    triumphantLightCards,

    promoBoosterCardsObtained,
    promoCards,

    totalCollected,
    percentComplete,
    rarePokemon,
    legendaryPokemon,

    geneticApexProgress: Math.round(
      ((charizardBoosterCardsObtained.length +
        mewtwoBoosterCardsObtained.length +
        pickachuBoosterCardsObtained.length) /
        (charizardBoosterCards.length +
          mewtwoBoosterCards.length +
          pickachuBoosterCards.length)) *
        100
    ),
    mythicalIslandProgress: Math.round(
      (mythicalIslandCardsObtained.length / mythicalIslandCards.length) * 100
    ),
    spaceTimeSmackdownProgress: Math.round(
      ((dialgaBoosterCardsObtained.length + palkiaBoosterCardsObtained.length) /
        (dialgaBoosterCards.length + palkiaBoosterCards.length)) *
        100
    ),
    triumphantLightProgress: Math.round(
      (triumphantLightBoosterCardsObtained.length /
        triumphantLightCards.length) *
        100
    ),
    promoAProgress: Math.round(
      (promoBoosterCardsObtained.length / promoCards.length) * 100
    ),
  };
};
