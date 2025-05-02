import PokemonStatistics from "@/modules/home/components/PokemonStatistics";
import { IPokemon } from "../api/pokemons/route";
import PokemonList from "@/modules/home/components/PokemonList";
import { FC } from "react";
import Header from "@/components/header";
import PokemonListFilters from "@/modules/home/components/PokemonListFilters";

const HomePage: FC<{ params: Promise<{ pack: string }> }> = async ({
  params,
}) => {
  const { pack } = await params;

  const response = await fetch(
    `${process.env.API_URL}/api/pokemons?pack=${pack}`
  );

  if (!response.ok) {
    return <div>Erro ao carregar os pokemons</div>;
  }

  const data: IPokemon[] = await response?.json();

  return (
    <div className="overflow-auto w-screen font-sans">
      <div className="container mx-auto px-8 ">
        <Header />
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-4/6">
              <h2 className="text-4xl font-bold mb-4 capitalize">
                Pacote {pack.replace(/-/g, " ")}
              </h2>
              <p className="text-xl mb-6">
                Essas são as suas estatísticas (cartas obtidas do pacote / total
                cartas do pacote), atualize os dados clicando nas cartas abaixo
                e saiba quantas cartas você já possui de cada pacote!
              </p>
            </div>
            <div className="md:w-2/6 flex justify-center">
              <PokemonStatistics collection={pack} />
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-start flex-col gap-8">
        <main className="flex flex-col items-center gap-10 container mx-auto px-4">
          {/* <PokemonListFilters /> */}

          <PokemonList data={data} />
        </main>
      </section>
    </div>
  );
};

export default HomePage;
