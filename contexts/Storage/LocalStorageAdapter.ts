import { IStorage } from ".";
import { EventEmitter } from "events";

export class LocalStorageAdapter implements IStorage {
  private eventEmitter = new EventEmitter();

  getItem<T>(key: string): T {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
    this.emitUpdate();
  }

  emitUpdate() {
    this.eventEmitter.emit("update");
  }

  onUpdate(listener: () => void) {
    this.eventEmitter.on("update", listener);
  }
}

export const localStorageAdapter = new LocalStorageAdapter();
