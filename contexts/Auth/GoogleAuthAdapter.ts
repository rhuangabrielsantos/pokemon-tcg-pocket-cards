import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { IAuth } from ".";
import { auth } from "@/lib/firebase";

class GoogleAuthAdapter implements IAuth {
  public onSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      return result.user;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  public onSignOut = () => {
    signOut(auth);
  };
}

export const googleAuthAdapter = new GoogleAuthAdapter();
