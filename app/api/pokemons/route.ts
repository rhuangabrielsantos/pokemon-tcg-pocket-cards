import pokemons from "./pokemons.json";

export interface IPokemonsResponse {
  geneticApex: IPokemon[];
  mythicalIsland: IPokemon[];
  spaceTimeSmackdown: IPokemon[];
  triumphantLight: IPokemon[];
  promoA: IPokemon[];
}

export interface IPokemon {
  id: string;
  name: string;
  rarity: string;
  type: string;
  pack: string;
  health: string;
  image: string;
}

export async function GET() {
  try {
    return Response.json({
      geneticApex: pokemons.filter((pokemon) =>
        ["Mewtwo", "Pikachu", "Charizard", "GeneticDomination"].includes(
          pokemon.pack
        )
      ),
      mythicalIsland: pokemons.filter((pokemon) =>
        ["MythicalIsland"].includes(pokemon.pack)
      ),
      spaceTimeSmackdown: pokemons.filter((pokemon) =>
        ["SpaceTiming", "Dialga", "Palkia"].includes(pokemon.pack)
      ),
      triumphantLight: pokemons.filter((pokemon) =>
        ["TriumphantLight"].includes(pokemon.pack)
      ),
      promoA: pokemons.filter((pokemon) => ["Promo"].includes(pokemon.pack)),
    });
  } catch (error) {
    console.log(error);
    return Response.error();
  }
}
