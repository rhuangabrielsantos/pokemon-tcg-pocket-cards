import { db } from "@/lib/firebase";
import { IStorage } from ".";
import {
  addDoc,
  collection,
  doc,
  DocumentData,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { EventEmitter } from "events";

type FirestoreItem = { [key: string]: string };

class FirestoreStorageAdapter implements IStorage {
  private eventEmitter = new EventEmitter();

  async getItem<T>(key: string): Promise<T | undefined> {
    const collectionRef = collection(db, key);

    return await getDocs(collectionRef).then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      return data[0] as T;
    });
  }

  async setItem<T>(key: string, value: T): Promise<void> {
    const collectionRef = collection(db, key);
    const data = value as DocumentData;

    const docExists = await this.getItem<FirestoreItem | undefined>(key);

    if (docExists) {
      const docReference = doc(db, key, docExists.id);
      await updateDoc(docReference, data);

      this.emitUpdate();
      return;
    }

    await addDoc(collectionRef, data);
    this.emitUpdate();
  }

  emitUpdate() {
    this.eventEmitter.emit("update");
  }

  onUpdate(listener: () => void) {
    this.eventEmitter.on("update", listener);
  }
}

export const firestoreStorageAdapter = new FirestoreStorageAdapter();
