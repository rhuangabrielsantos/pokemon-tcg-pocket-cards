import { NextRequest } from "next/server";

export interface IPokemon {
  id: string;
  name: string;
  rarity: string;
  pack: string;
  type: string;
  health: number | null;
  stage: string | null;
  craftingCost: number | null;
  image: string;
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  let data: IPokemon[] = [];

  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/chase-manning/pokemon-tcg-pocket-cards/refs/heads/main/v1.json"
    );
    const jsonData: IPokemon[] = await response.json();
    data = jsonData;

    if (searchParams.get("name") !== "undefined") {
      const name = searchParams.get("name")!.toLocaleLowerCase();
      data = data.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(name)
      );
    }

    if (searchParams.get("type") !== "undefined") {
      const type = searchParams.get("type")!.toLocaleLowerCase();
      data = data.filter((pokemon) =>
        pokemon.type.toLowerCase().includes(type)
      );
    }

    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.error();
  }
}
