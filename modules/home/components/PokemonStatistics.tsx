"use client";

import Image from "next/image";
import { usePokemonStatistics } from "../hooks/usePokemonStatistics";

const PokemonStatistics = () => {
  const {
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
  } = usePokemonStatistics();

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="flex items-start justify-center gap-6">
        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            src="/charizard.jpg"
            alt="Pacote charizard"
            width={100}
            height={300}
          />
          <h3 className="font-sans text-xl text-slate-600">
            {charizardBoosterCardsObtained.length} /{" "}
            {charizardBoosterCards.length}
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            src="/mewtwo.jpg"
            alt="Pacote charizard"
            width={100}
            height={300}
          />
          <h3 className="font-sans text-xl text-slate-600">
            {mewtwoBoosterCardsObtained.length} / {mewtwoBoosterCards.length}
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            src="/pikachu.jpg"
            alt="Pacote charizard"
            width={100}
            height={300}
          />
          <h3 className="font-sans text-xl text-slate-600">
            {pickachuBoosterCardsObtained.length} /{" "}
            {pickachuBoosterCards.length}
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            src="/mytical-island.png"
            alt="Pacote Mytical island"
            width={100}
            height={300}
          />
          <h3 className="font-sans text-xl text-slate-600">
            {mythicalIslandCardsObtained.length} / {mythicalIslandCards.length}
          </h3>
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            src="/dialga.png"
            alt="Pacote Dialga"
            width={100}
            height={300}
          />
          <h3 className="font-sans text-xl text-slate-600">
            {dialgaBoosterCardsObtained.length} / {dialgaBoosterCards.length}
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            src="/palkia.png"
            alt="Pacote Palkia"
            width={100}
            height={300}
          />
          <h3 className="font-sans text-xl text-slate-600">
            {palkiaBoosterCardsObtained.length} / {palkiaBoosterCards.length}
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            src="/triumphant-light.png"
            alt="Pacote Triumphant light"
            width={100}
            height={300}
          />
          <h3 className="font-sans text-xl text-slate-600">
            {triumphantLightBoosterCardsObtained.length} /{" "}
            {triumphantLightCards.length}
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            src="/promo.webp"
            alt="Pacote Promo"
            width={100}
            height={300}
          />
          <h3 className="font-sans text-xl text-slate-600">
            {promoBoosterCardsObtained.length} / {promoCards.length}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PokemonStatistics;
