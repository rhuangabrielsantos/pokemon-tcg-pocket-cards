export interface IStorage {
  getItem: <T>(key: string) => Promise<T | undefined>;
  setItem: <T>(key: string, value: T) => Promise<void>;
  emitUpdate: () => void;
  onUpdate: (listener: () => void) => void;
}
