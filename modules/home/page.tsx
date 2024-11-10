import { Suspense } from "react";

import { IPokemon } from "@/app/api/pokemons/route";
import { Skeleton } from "@/components/ui/skeleton";

import PokemonCard from "./components/PokemonCard";
import PokemonListFilters from "./components/PokemonListFilters";
import PokemonStatistics from "./components/PokemonStatistics";

type SearchParams = { [key: string]: string | string[] | undefined };

interface IHomePageProps {
  searchParams: SearchParams;
}

const HomePage = async (props: IHomePageProps) => {
  const { searchParams } = props;

  const response = await fetch(
    `${process.env.API_URL}/api/pokemons?name=${searchParams.name}&type=${searchParams.type}`
  );
  const data: IPokemon[] | undefined = await response.json();

  return (
    <section className="flex justify-start flex-col gap-8">
      <header className="flex justify-start flex-col">
        <h1 className="text-4xl font-bold text-slate-800  font-sans">
          Coleção Cartas Pokemon TCG Pocket
        </h1>
      </header>

      <main className="flex flex-col gap-2">
        <PokemonStatistics />
        <PokemonListFilters />

        <Suspense fallback={<Skeleton className="w-full h-full" />}>
          <div className="grid grid-cols-5 gap-4 mt-4">
            {data?.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        </Suspense>
      </main>
    </section>
  );
};

export default HomePage;
