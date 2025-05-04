"use client";

import { FC } from "react";
import { usePokemonStatistics } from "../hooks/usePokemonStatistics";

type PokemonStatisticsProps = {
  collection: string;
};

const PokemonStatistics: FC<PokemonStatisticsProps> = ({ collection }) => {
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

    shiningRevelryBoosterCardsObtained,
    shiningRevelryBoosterCards,

    solgaleoBoosterCardsObtained,
    solgaleoBoosterCards,

    lunalaBoosterCardsObtained,
    lunalaBoosterCards,
  } = usePokemonStatistics();

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="flex items-start justify-center gap-6">
        {collection === "genetic-apex" ? (
          <>
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
                {mewtwoBoosterCardsObtained.length} /{" "}
                {mewtwoBoosterCards.length}
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
          </>
        ) : null}

        {collection === "mythical-island" ? (
          <div className="flex flex-col items-center justify-center gap-2">
            <img
              src="/mytical-island.png"
              alt="Pacote Mytical island"
              style={{ width: 120, height: 250 }}
            />
            <h3 className="font-sans text-xl text-slate-600">
              {mythicalIslandCardsObtained.length} /{" "}
              {mythicalIslandCards.length}
            </h3>
          </div>
        ) : null}

        {collection === "space-time-smackdown" ? (
          <>
            <div className="flex flex-col items-center justify-center gap-2">
              <img
                src="/dialga.png"
                alt="Pacote Dialga"
                style={{ width: 120, height: 250 }}
              />
              <h3 className="font-sans text-xl text-slate-600">
                {dialgaBoosterCardsObtained.length} /{" "}
                {dialgaBoosterCards.length}
              </h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <img
                src="/palkia.png"
                alt="Pacote Palkia"
                style={{ width: 120, height: 250 }}
              />
              <h3 className="font-sans text-xl text-slate-600">
                {palkiaBoosterCardsObtained.length} /{" "}
                {palkiaBoosterCards.length}
              </h3>
            </div>
          </>
        ) : null}

        {collection === "triumphant-light" ? (
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
        ) : null}

        {collection === "promo-a" ? (
          <div className="flex flex-col items-center justify-center gap-2">
            <img
              src="/promo.webp"
              alt="Pacote Promo A"
              style={{ width: 120, height: 250 }}
            />
            <h3 className="font-sans text-xl text-slate-600">
              {promoBoosterCardsObtained.length} / {promoCards.length}
            </h3>
          </div>
        ) : null}

        {collection === "shining-revelry" ? (
          <div className="flex flex-col items-center justify-center gap-2">
            <img
              src="/shining-revelry.png"
              alt="Pacote Shining Revelry"
              style={{ width: 120, height: 250 }}
            />
            <h3 className="font-sans text-xl text-slate-600">
              {shiningRevelryBoosterCardsObtained.length} /{" "}
              {shiningRevelryBoosterCards.length}
            </h3>
          </div>
        ) : null}

        {collection === "celestial-guardians" ? (
          <>
            <div className="flex flex-col items-center justify-center gap-2">
              <img
                src="/solgaleo.png"
                alt="Pacote Solgaleo"
                style={{ width: 120, height: 250 }}
              />
              <h3 className="font-sans text-xl text-slate-600">
                {solgaleoBoosterCardsObtained.length} /{" "}
                {solgaleoBoosterCards.length}
              </h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <img
                src="/lunala.png"
                alt="Pacote Lunala"
                style={{ width: 120, height: 250 }}
              />
              <h3 className="font-sans text-xl text-slate-600">
                {lunalaBoosterCardsObtained.length} /{" "}
                {lunalaBoosterCards.length}
              </h3>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default PokemonStatistics;
