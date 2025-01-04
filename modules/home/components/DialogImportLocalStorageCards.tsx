"use client";

import { localStorageAdapter } from "@/contexts/Storage/LocalStorageAdapter";
import { useCallback, useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useClaimedPokemons } from "../hooks/useClaimedPokemons";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const DialogImportLocalStorageCards = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [localStorageCards, setLocalStorageCards] = useState<string[]>([]);
  const [firestoreCards, setFirestoreCards] = useState<string[]>([]);

  const isSmallDevice = useMediaQuery("(max-width : 768px)");

  const { isAuthenticated } = useAuth();
  const { getClaimedPokemons, setClaimedPokemons } = useClaimedPokemons();

  const onVerifyImportIsAvailable = useCallback(async () => {
    const importWasCancelled = await localStorageAdapter.getItem<boolean>(
      "cancelled-import"
    );
    if (importWasCancelled) return;

    const localStorageCards = await handleGetLocalStoragePokemons();
    setLocalStorageCards(localStorageCards);

    const firestoreCards = await getClaimedPokemons();
    setFirestoreCards(firestoreCards);

    const hasCardsAvailableToImport = localStorageCards.length > 0;

    if (hasCardsAvailableToImport && isAuthenticated) {
      setDialogOpen(true);
    }
  }, [getClaimedPokemons, isAuthenticated]);

  const handleGetLocalStoragePokemons = async () => {
    const localStorageCards = await localStorageAdapter.getItem<
      string[] | undefined
    >("claimed-pokemons");

    return localStorageCards ?? [];
  };

  const onImportCards = async () => {
    const allCards = Array.from(
      new Set([...localStorageCards, ...firestoreCards])
    );

    await setClaimedPokemons(allCards);
    await localStorageAdapter.setItem("claimed-pokemons", []);
    setDialogOpen(false);

    window.location.reload();
  };

  const onCancelImport = () => {
    localStorageAdapter.setItem("cancelled-import", true);
    setDialogOpen(false);
  };

  useEffect(() => {
    onVerifyImportIsAvailable();
  }, [onVerifyImportIsAvailable, isAuthenticated]);

  return isSmallDevice ? (
    <Drawer open={dialogOpen} onOpenChange={(open) => setDialogOpen(open)}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Importação de cartas para sua conta!</DrawerTitle>
            <DrawerDescription>
              {" "}
              Notamos que você possui cartas salvas em seu navegador, deseja
              importá-las para sua conta?
            </DrawerDescription>

            <DrawerDescription>
              Caso você importe as cartas, as cartas salvas no navegador serão
              removidas e adicionadas a sua conta.
            </DrawerDescription>
          </DrawerHeader>
        </div>

        <DrawerFooter>
          <Button type="button" onClick={onImportCards}>
            Importar
          </Button>

          <DrawerClose asChild>
            <Button type="button" variant="secondary" onClick={onCancelImport}>
              Cancelar
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ) : (
    <Dialog open={dialogOpen} onOpenChange={(open) => setDialogOpen(open)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Importação de cartas para sua conta!</DialogTitle>
          <DialogDescription>
            Notamos que você possui cartas salvas em seu navegador, deseja
            importá-las para sua conta?
          </DialogDescription>

          <DialogDescription>
            Caso você importe as cartas, as cartas salvas no navegador serão
            removidas e adicionadas a sua conta.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex justify-end">
          <DialogClose asChild>
            <Button type="button" variant="secondary" onClick={onCancelImport}>
              Cancelar
            </Button>
          </DialogClose>

          <Button type="button" onClick={onImportCards}>
            Importar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogImportLocalStorageCards;
