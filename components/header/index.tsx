"use client";

import { useAuth } from "@/hooks/useAuth";
import { Button } from "../ui/button";
import { localStorageAdapter } from "@/contexts/Storage/LocalStorageAdapter";
import { useClaimedPokemons } from "@/modules/home/hooks/useClaimedPokemons";
import Link from "next/link";

const Header = () => {
  const { onSignInWithGoogle, onSignOut, isAuthenticated, user } = useAuth();
  const { getClaimedPokemons, setClaimedPokemons } = useClaimedPokemons();

  const onImportCards = async () => {
    const localStorageCards = await handleGetLocalStoragePokemons();
    const firestoreCards = await getClaimedPokemons();

    const allCards = Array.from(
      new Set([...localStorageCards, ...firestoreCards])
    );

    await setClaimedPokemons(allCards);
    await localStorageAdapter.setItem("claimed-pokemons", []);

    window.location.reload();
  };

  const handleGetLocalStoragePokemons = async () => {
    const localStorageCards = await localStorageAdapter.getItem<
      string[] | undefined
    >("claimed-pokemons");

    return localStorageCards ?? [];
  };

  return isAuthenticated ? (
    <header className="w-full flex flex-col py-4 md:p-0 lg:flex-row items-start lg:items-center justify-between gap-4">
      <Link href="/">
        <img
          src="/logo-poke-album.png"
          alt="Poke Album"
          style={{ width: 80, height: 80 }}
        />
      </Link>

      <div className="flex items-center justify-center gap-4">
        <Button onClick={onImportCards}>
          Importar cartas salvas navegador
        </Button>
        <Button
          className="flex items-center justify-center bg-white text-black border border-zinc-300 hover:bg-zinc-100"
          onClick={onSignOut}
        >
          Sign out
        </Button>

        <img
          src={user?.photoURL ?? ""}
          alt="Usuario"
          className="rounded-full"
          style={{ width: 30, height: 30 }}
        />
      </div>
    </header>
  ) : (
    <header className="w-full flex flex-col py-4 md:p-0 lg:flex-row items-start lg:items-center justify-between gap-4">
      <Link href="/">
        <img
          src="/logo-poke-album.png"
          alt="Poke Album"
          style={{ width: 80, height: 80 }}
        />
      </Link>

      <Button
        className="flex items-center justify-center bg-white text-black border border-zinc-300 rounded-xl hover:bg-zinc-100"
        onClick={onSignInWithGoogle}
      >
        <img src="/google.svg" alt="Google" style={{ width: 20, height: 20 }} />
        <span className="ml-2">Sign in with Google</span>
      </Button>
    </header>
  );
};

export default Header;
