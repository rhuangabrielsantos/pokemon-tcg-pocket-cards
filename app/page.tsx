"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Github, Search } from "lucide-react";
import { ChevronRight, Bookmark, Star, BookOpen, Trophy } from "lucide-react";
import Header from "@/components/header";
import { usePokemonStatistics } from "@/modules/home/hooks/usePokemonStatistics";
import { useRouter } from "next/navigation";
import DialogImportLocalStorageCards from "@/modules/home/components/DialogImportLocalStorageCards";

export default function HomePage() {
  const router = useRouter();

  const {
    totalCollected,
    percentComplete,
    rarePokemon,
    legendaryPokemon,

    geneticApexProgress,
    mythicalIslandProgress,
    spaceTimeSmackdownProgress,
    triumphantLightProgress,
    promoAProgress,
  } = usePokemonStatistics();

  const albumCollections = [
    {
      id: "genetic-apex",
      name: "Genetic Apex",
      color: "bg-purple-500",
      description: "A primeira coleção lançada para Pokémon TCG Pocket",
      progress: geneticApexProgress,
      cover: "/charizard.jpg",
    },
    {
      id: "mythical-island",
      name: "Mythical Island",
      color: "bg-green-500",
      description:
        "O primeiro pacote de reforço temático e a segunda expansão geral",
      progress: mythicalIslandProgress,
      cover: "/mytical-island.png",
    },
    {
      id: "space-time-smackdown",
      name: "Space-Time Smackdown",
      color: "bg-blue-500",
      description: "A segunda expansão principal, e terceira expansão geral",
      progress: spaceTimeSmackdownProgress,
      cover: "/dialga.png",
    },
    {
      id: "triumphant-light",
      name: "Triumphant Light",
      color: "bg-yellow-500",
      description:
        "O segundo pacote de reforço temático e a quarta expansão geral",
      progress: triumphantLightProgress,
      cover: "/triumphant-light.png",
    },
    {
      id: "promo-a",
      name: "Promo A",
      color: "bg-pink-500",
      description: "Cartas promocionais e especiais",
      progress: promoAProgress,
      cover: "/promo.webp",
    },
  ];

  return (
    <div className="overflow-auto w-screen font-sans">
      <div className="container mx-auto px-8 ">
        <Header />
      </div>

      <section className="bg-gradient-to-r from-red-500 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-4/6">
              <h2 className="text-4xl font-bold mb-4">
                Seu Álbum Digital de Pokémon TCG Pocket
              </h2>
              <p className="text-xl mb-6">
                Colecione, organize e compartilhe sua coleção de Pokémon TCG
                Pocket com treinadores de todo o mundo!
              </p>
              <p className="text-xl flex items-center gap-2">
                <ArrowLeft />
                Clique em uma das coleções ao lado para começar a explorar!
              </p>
            </div>
            <div className="md:w-2/6 flex justify-center">
              <img
                src="/pokedex.png"
                alt="Pokémon Album Showcase"
                className="w-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Sua Jornada Pokémon
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-none shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl font-bold text-blue-600">
                  {totalCollected}
                </CardTitle>
                <CardDescription>Pokémon Coletados</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-none shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl font-bold text-green-600">
                  {percentComplete}%
                </CardTitle>
                <CardDescription>Progresso Total</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Progress value={percentComplete} className="h-2" />
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-none shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl font-bold text-purple-600">
                  {rarePokemon}
                </CardTitle>
                <CardDescription>Full Art Coletados</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-none shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl font-bold text-yellow-600">
                  {legendaryPokemon}
                </CardTitle>
                <CardDescription>Shiny Coletados</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Suas Coleções</h2>
            <Button variant="outline" className="gap-1">
              Ver todas <ChevronRight size={16} />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {albumCollections.map((collection) => (
              <Card
                key={collection.id}
                className={`overflow-hidden transition-all hover:shadow-lg`}
              >
                <div className={`h-1.5 ${collection.color}`}></div>
                <div className="p-6 flex gap-4">
                  <img
                    src={collection.cover}
                    alt={collection.name}
                    className="w-24 h-48 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold">{collection.name}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      {collection.description}
                    </p>
                    <div className="mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progresso</span>
                        <span className="font-medium">
                          {collection.progress}%
                        </span>
                      </div>
                      <Progress value={collection.progress} className="h-1.5" />
                    </div>
                    <Button
                      size="sm"
                      className={collection.color}
                      onClick={() => router.push(`/${collection.id}`)}
                    >
                      <BookOpen size={16} className="mr-1" />
                      Abrir Álbum
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/logo-poke-album.png"
                  alt="PokéAlbum Logo"
                  className="w-10 h-10"
                />
                <h2 className="text-xl font-bold">PokéAlbum</h2>
              </div>
              <p className="text-gray-400">
                Sua plataforma para colecionar, organizar e compartilhar sua
                coleção de Pokémon TCG Pocket com amigos e outros treinadores.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 PokéAlbum. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                <a
                  href="https://github.com/rhuangabrielsantos/pokemon-tcg-pocket-cards"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <DialogImportLocalStorageCards />
    </div>
  );
}
