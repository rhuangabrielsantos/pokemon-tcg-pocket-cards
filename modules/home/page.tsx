import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PokemonList from "./components/PokemonList";
import PokemonStatistics from "./components/PokemonStatistics";
import { IPokemonsResponse } from "@/app/api/pokemons/route";
import Image from "next/image";

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

        <Tabs
          defaultValue="genetic-apex"
          className="w-full flex flex-col items-center justify-center gap-10"
        >
          <TabsList>
            <TabsTrigger value="genetic-apex">
              <Image
                src="/logo-genetic-apex.webp"
                alt="Genetic Apex"
                width={120}
                height={66}
              />
            </TabsTrigger>
            <TabsTrigger value="mythical-island">
              <Image
                src="/logo-mythical-island.webp"
                alt="Mythical Island"
                width={120}
                height={66}
              />
            </TabsTrigger>
            <TabsTrigger value="space-time-smackdown">
              <Image
                src="/logo-space-time-smackdown.webp"
                alt="Space-time Smackdown"
                width={120}
                height={66}
              />
            </TabsTrigger>
            <TabsTrigger value="triumphant-light">
              <Image
                src="/logo-triumphant-light.webp"
                alt="Triumphant Light"
                width={120}
                height={66}
              />
            </TabsTrigger>
            <TabsTrigger value="promo-a">
              <Image
                src="/logo-promo-a.webp"
                alt="Promo A"
                width={120}
                height={66}
              />
            </TabsTrigger>
          </TabsList>

          <TabsContent value="genetic-apex">
            <PokemonList data={data.geneticApex} />
          </TabsContent>
          <TabsContent value="mythical-island">
            <PokemonList data={data.mythicalIsland} />
          </TabsContent>
          <TabsContent value="space-time-smackdown">
            <PokemonList data={data.spaceTimeSmackdown} />
          </TabsContent>
          <TabsContent value="triumphant-light">
            <PokemonList data={data.triumphantLight} />
          </TabsContent>
          <TabsContent value="promo-a">
            <PokemonList data={data.promoA} />
          </TabsContent>
        </Tabs>
      </main>
    </section>
  );
};

export default HomePage;
