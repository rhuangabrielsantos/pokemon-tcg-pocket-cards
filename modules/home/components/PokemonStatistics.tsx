"use client";

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
          <img
            src="/charizard.jpg"
            alt="Pacote charizard"
            style={{ width: 120, height: 250 }}
          />
          <h3 className="font-sans text-xl text-slate-600">
            {charizardBoosterCardsObtained.length} /{" "}
            {charizardBoosterCards.length}
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            src="/mewtwo.jpg"
            alt="Pacote charizard"
            style={{ width: 120, height: 250 }}
          />
          <h3 className="font-sans text-xl text-slate-600">
            {mewtwoBoosterCardsObtained.length} / {mewtwoBoosterCards.length}
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            src="/pikachu.jpg"
            alt="Pacote charizard"
            style={{ width: 120, height: 250 }}
          />
          <h3 className="font-sans text-xl text-slate-600">
            {pickachuBoosterCardsObtained.length} /{" "}
            {pickachuBoosterCards.length}
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            src="/mytical-island.png"
            alt="Pacote Mytical island"
            style={{ width: 120, height: 250 }}
          />
          <h3 className="font-sans text-xl text-slate-600">
            {mythicalIslandCardsObtained.length} / {mythicalIslandCards.length}
          </h3>
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <img
            src="/dialga.png"
            alt="Pacote Dialga"
            style={{ width: 120, height: 250 }}
          />
          <h3 className="font-sans text-xl text-slate-600">
            {dialgaBoosterCardsObtained.length} / {dialgaBoosterCards.length}
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            src="/palkia.png"
            alt="Pacote Palkia"
            style={{ width: 120, height: 250 }}
          />
          <h3 className="font-sans text-xl text-slate-600">
            {palkiaBoosterCardsObtained.length} / {palkiaBoosterCards.length}
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            src="/triumphant-light.png"
            alt="Pacote Triumphant light"
            style={{ width: 120, height: 250 }}
          />
          <h3 className="font-sans text-xl text-slate-600">
            {triumphantLightBoosterCardsObtained.length} /{" "}
            {triumphantLightCards.length}
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            src="/promo.webp"
            alt="Pacote Promo"
            style={{ width: 120, height: 250 }}
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
