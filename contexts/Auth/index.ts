import { User } from "firebase/auth";
import createContextFactory from "..";
import { googleAuthAdapter } from "./GoogleAuthAdapter";

export type UserProps = {
  id: string;
  name: string;
  photoURL: string;
};

export interface IAuth {
  onSignInWithGoogle: () => Promise<User | undefined>;
  onSignOut: () => void;
}

const {
  useContext: useAuthContext,
  Provider: AuthProvider,
  Holder: AuthHolder,
} = createContextFactory<IAuth>(googleAuthAdapter);

export { useAuthContext, AuthProvider, AuthHolder };
