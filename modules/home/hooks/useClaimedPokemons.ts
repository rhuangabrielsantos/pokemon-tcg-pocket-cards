import { firestoreStorageAdapter } from "@/contexts/Storage/FirestoreStorageAdapter";
import { localStorageAdapter } from "@/contexts/Storage/LocalStorageAdapter";
import { useAuth } from "@/hooks/useAuth";
import { useCallback } from "react";

interface AuthenticatedPokemons {
  id: string;
  claimedCards: string[];
}

export const useClaimedPokemons = () => {
  const { isAuthenticated, user } = useAuth();

  const getClaimedPokemons = useCallback(async () => {
    if (isAuthenticated) {
      const pokemons = await firestoreStorageAdapter.getItem<
        AuthenticatedPokemons | undefined
      >(user.uid);
      return pokemons?.claimedCards ?? [];
    }

    const pokemons = await localStorageAdapter.getItem<string[]>(
      "claimed-pokemons"
    );
    return pokemons ?? [];
  }, [isAuthenticated, user]);

  const setClaimedPokemons = useCallback(
    async (pokemons: string[]) => {
      if (isAuthenticated) {
        await firestoreStorageAdapter.setItem(user.uid, {
          claimedCards: pokemons,
        });
      } else {
        await localStorageAdapter.setItem("claimed-pokemons", pokemons);
      }
    },
    [isAuthenticated, user?.uid]
  );

  return {
    getClaimedPokemons,
    setClaimedPokemons,
  };
};
