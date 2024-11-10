import { Suspense } from "react";

import { Skeleton } from "@/components/ui/skeleton";

import PokemonList from "./components/PokemonList";
import PokemonListFilters from "./components/PokemonListFilters";
import PokemonStatistics from "./components/PokemonStatistics";

type SearchParams = { [key: string]: string | string[] | undefined };

interface IHomePageProps {
  searchParams: SearchParams;
}

const HomePage = async (props: IHomePageProps) => {
  const { searchParams } = props;

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
          <PokemonList searchParams={searchParams} />
        </Suspense>
      </main>
    </section>
  );
};

export default HomePage;
