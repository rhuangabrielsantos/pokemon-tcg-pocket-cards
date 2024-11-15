import { IPokemon } from "@/app/api/pokemons/route";
import PokemonCard from "./PokemonCard";

type SearchParams = { [key: string]: string | string[] | undefined };

interface IHomePageProps {
  searchParams: SearchParams;
}

const PokemonList = async (props: IHomePageProps) => {
  const { searchParams } = props;

  const response = await fetch(
    `${process.env.API_URL}/api/pokemons?name=${searchParams.name}&type=${searchParams.type}`
  );

  if (!response.ok) {
    return <div>Erro ao carregar os pokemons</div>;
  }

  const data: IPokemon[] = await response.json();

  return (
    <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full">
      {data?.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
