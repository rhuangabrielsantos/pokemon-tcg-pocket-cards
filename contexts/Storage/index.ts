import createContextFactory from "..";
import { localStorageAdapter } from "./LocalStorageAdapter";

export interface IStorage {
  getItem: <T>(key: string) => T | undefined;
  setItem: <T>(key: string, value: T) => void;
  emitUpdate: () => void;
  onUpdate: (listener: () => void) => void;
}

const {
  useContext: useStorageContext,
  Provider: StorageProvider,
  Holder: StorageHolder,
} = createContextFactory<IStorage>(localStorageAdapter);

export { useStorageContext, StorageProvider, StorageHolder };
