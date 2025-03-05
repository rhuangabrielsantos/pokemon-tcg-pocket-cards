"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PokemonList from "./PokemonList";
import { IPokemonsResponse } from "@/app/api/pokemons/route";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

type PokemonListTabsProps = {
  data: IPokemonsResponse;
};

const PokemonListTabs = ({ data }: PokemonListTabsProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const tab = searchParams.get("tab") ?? "genetic-apex";

  const handleUpdateSearchParams = (tab: string) => {
    const urlSearchParams = new URLSearchParams(searchParams.toString());
    urlSearchParams.set("tab", tab);

    router.push(pathname + "?" + urlSearchParams);
  };

  return (
    <Tabs
      defaultValue={tab}
      className="w-full flex flex-col items-center justify-center gap-10"
    >
      <TabsList>
        <TabsTrigger
          value="genetic-apex"
          onClick={() => handleUpdateSearchParams("genetic-apex")}
        >
          <img
            src="/logo-genetic-apex.webp"
            alt="Genetic Apex"
            style={{ width: 110, height: 50 }}
          />
        </TabsTrigger>
        <TabsTrigger
          value="mythical-island"
          onClick={() => handleUpdateSearchParams("mythical-island")}
        >
          <img
            src="/logo-mythical-island.webp"
            alt="Mythical Island"
            style={{ width: 110, height: 50 }}
          />
        </TabsTrigger>
        <TabsTrigger
          value="space-time-smackdown"
          onClick={() => handleUpdateSearchParams("space-time-smackdown")}
        >
          <img
            src="/logo-space-time-smackdown.webp"
            alt="Space-time Smackdown"
            style={{ width: 110, height: 50 }}
          />
        </TabsTrigger>
        <TabsTrigger
          value="triumphant-light"
          onClick={() => handleUpdateSearchParams("triumphant-light")}
        >
          <img
            src="/logo-triumphant-light.webp"
            alt="Triumphant Light"
            style={{ width: 110, height: 50 }}
          />
        </TabsTrigger>
        <TabsTrigger
          value="promo-a"
          onClick={() => handleUpdateSearchParams("promo-a")}
        >
          <img
            src="/logo-promo-a.webp"
            alt="Promo A"
            style={{ width: 110, height: 50 }}
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
  );
};

export default PokemonListTabs;
