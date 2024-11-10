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
    <>
      <h3 className="text-lg font-bold font-sans">Filtros</h3>

      <section className="flex items-center justify-start gap-4">
        <Input
          type="text"
          placeholder="Nome do pokemon"
          className="w-[250px]"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Select value={type} onValueChange={(value) => setType(value)}>
          <SelectTrigger className="w-[300px]">
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

        <Button onClick={handleFilterCards}>Filtrar</Button>
        <Button variant="outline" onClick={handleClearFilters}>
          Limpar
        </Button>
      </section>
    </>
  );
};

export default PokemonListFilters;
