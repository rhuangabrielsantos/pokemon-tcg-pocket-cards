"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePokemonListFilters } from "../hooks/usePokemonListFilters";

const PokemonListFilters = () => {
  const {
    name,
    type,
    setName,
    setType,
    handleFilterCards,
    handleClearFilters,
  } = usePokemonListFilters();

  return (
    <div className="w-full flex flex-col gap-2">
      <h3 className="text-lg font-bold font-sans">Filtros</h3>

      <section className="flex flex-col items-start justify-start gap-4 md:items-center md:flex-row">
        <Input
          type="text"
          placeholder="Nome do pokemon"
          className="w-full md:w-[250px]"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Select value={type} onValueChange={(value) => setType(value)}>
          <SelectTrigger
            className="w-full md:w-[300px]"
            aria-label="Selecione o tipo do pokemon"
          >
            <SelectValue placeholder="Selecione o tipo do pokemon" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="grass">Planta</SelectItem>
            <SelectItem value="fire">Fogo</SelectItem>
            <SelectItem value="water">Água</SelectItem>
            <SelectItem value="lightning">Raios</SelectItem>
            <SelectItem value="psychic">Psíquico</SelectItem>
            <SelectItem value="fighting">Luta</SelectItem>
            <SelectItem value="darkness">Escuridão</SelectItem>
            <SelectItem value="metal">Metal</SelectItem>
          </SelectContent>
        </Select>

        <Button
          onClick={handleFilterCards}
          className="w-full md:w-auto"
          aria-label="Filtrar"
        >
          Filtrar
        </Button>
        <Button
          variant="outline"
          onClick={handleClearFilters}
          className="w-full md:w-auto"
          aria-label="Limpar"
        >
          Limpar
        </Button>
      </section>
    </div>
  );
};

export default PokemonListFilters;
