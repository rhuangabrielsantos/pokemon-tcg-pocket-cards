"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { IPokemon } from "@/app/api/pokemons/route";
import PokemonCard from "./PokemonCard";

interface IHomePageProps {
  data: IPokemon[];
  itemsPerPage?: number;
}

const PokemonList = ({ data, itemsPerPage = 10 }: IHomePageProps) => {
  const [displayedItems, setDisplayedItems] = useState<IPokemon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
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

  return (
    <>
      <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full">
        {displayedItems.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
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
