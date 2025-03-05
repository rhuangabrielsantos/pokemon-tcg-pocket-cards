"use server";

import PokemonStatistics from "./components/PokemonStatistics";
import { IPokemonsResponse } from "@/app/api/pokemons/route";
import PokemonListTabs from "./components/PokemonListTabs";

const HomePage = async () => {
  const response = await fetch(`${process.env.API_URL}/api/pokemons`);

  if (!response.ok) {
    return <div>Erro ao carregar os pokemons</div>;
  }

  const data: IPokemonsResponse = await response.json();

  return (
    <section className="flex justify-start flex-col gap-8">
      <div className="flex justify-start flex-col">
        <h1 className="text-4xl font-bold text-slate-800  font-sans">
          Coleção Cartas Pokemon TCG Pocket
        </h1>

        <h2 className="font-sans text-xl text-slate-600 pb-8">
          Essas são as suas estatísticas (cartas obtidas do pacote / total
          cartas do pacote), atualize os dados clicando nas cartas abaixo para
          saber quais pacotes abrir para completar a coleção.
        </h2>

        <PokemonStatistics />
      </div>

      <main className="flex flex-col items-center gap-10">
        {/* <PokemonListFilters /> */}

        <PokemonListTabs data={data} />
      </main>
    </section>
  );
};

export default HomePage;
