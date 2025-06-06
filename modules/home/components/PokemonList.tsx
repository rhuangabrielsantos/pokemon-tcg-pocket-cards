"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { IPokemon } from "@/app/api/pokemons/route";
import PokemonCard from "./PokemonCard";
import { useClaimedPokemons } from "../hooks/useClaimedPokemons";

interface IHomePageProps {
  data: IPokemon[];
  itemsPerPage?: number;
}

const PokemonList = ({ data, itemsPerPage = 30 }: IHomePageProps) => {
  const [displayedItems, setDisplayedItems] = useState<IPokemon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [claimedPokemons, setClaimedPokemons] = useState<string[]>([]);

  const { getClaimedPokemons } = useClaimedPokemons();

  const loaderRef = useRef<HTMLDivElement>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && displayedItems.length < data.length) {
        setCurrentPage((prev) => prev + 1);
      }
    },
    [displayedItems.length, data.length]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "100px",
      threshold: 0,
    });

    const currentLoader = loaderRef.current;
    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [handleObserver]);

  useEffect(() => {
    const endIndex = currentPage * itemsPerPage;
    const newItems = data.slice(0, endIndex);
    setDisplayedItems(newItems);
  }, [currentPage, data, itemsPerPage]);

  useEffect(() => {
    const handleClaimedPokemons = async () => {
      setClaimedPokemons(await getClaimedPokemons());
    };

    handleClaimedPokemons();
  }, [getClaimedPokemons]);

  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-4 w-full mb-12">
        {displayedItems.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            claimedPokemons={claimedPokemons}
          />
        ))}
      </div>

      {displayedItems.length < data.length && (
        <div
          ref={loaderRef}
          className="w-full h-20 flex items-center justify-center"
        >
          <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent"></div>
        </div>
      )}
    </>
  );
};

export default PokemonList;
