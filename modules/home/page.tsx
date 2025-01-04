import { Suspense } from "react";

import { Skeleton } from "@/components/ui/skeleton";

import PokemonList from "./components/PokemonList";
import PokemonListFilters from "./components/PokemonListFilters";
import PokemonStatistics from "./components/PokemonStatistics";
import { IPokemon } from "@/app/api/pokemons/route";

type SearchParams = { [key: string]: string | string[] | undefined };

interface IHomePageProps {
  searchParams: SearchParams;
}

const HomePage = async (props: IHomePageProps) => {
  const { searchParams } = props;

  const response = await fetch(
    `${process.env.API_URL}/api/pokemons?name=${searchParams.name}&type=${searchParams.type}&pack=${searchParams.pack}`
  );

  if (!response.ok) {
    return <div>Erro ao carregar os pokemons</div>;
  }

  const data: IPokemon[] = await response.json();

  return (
    <section className="flex justify-start flex-col gap-8 p-6">
      <div className="flex justify-start flex-col">
        <h1 className="text-4xl font-bold text-slate-800  font-sans">
          Coleção Cartas Pokemon TCG Pocket
        </h1>
      </div>

      <main className="flex flex-col items-center gap-2 max-w-[1200px] w-full">
        <PokemonStatistics />
        <PokemonListFilters />

        <Suspense fallback={<Skeleton className="w-full h-full" />}>
          <PokemonList data={data} />
        </Suspense>
      </main>
    </section>
  );
};

export default HomePage;
