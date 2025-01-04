import { useAuthContext } from "@/contexts/Auth";
import { auth } from "@/lib/firebase";
import { User } from "firebase/auth";
import { useEffect, useMemo, useState } from "react";

interface IUseAuthAuthenticated {
  isAuthenticated: true;
  user: User;
  onSignOut: () => void;
  onSignInWithGoogle: () => Promise<void>;
}

interface IUseAuthUnauthenticated {
  isAuthenticated: false;
  user: null;
  onSignOut: () => void;
  onSignInWithGoogle: () => Promise<void>;
}

export type IUseAuth = IUseAuthAuthenticated | IUseAuthUnauthenticated;

export const useAuth = (): IUseAuth => {
  const { state: authContext } = useAuthContext();
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = useMemo(() => !!user, [user]);

  const onSignInWithGoogle = async () => {
    const result = await authContext.onSignInWithGoogle();

    if (result) {
      setUser(result);
    }
  };

  const onSignOut = () => {
    authContext.onSignOut();
    setUser(null);

    window.location.reload();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        return;
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (isAuthenticated) {
    return {
      isAuthenticated: true,
      user: user as User,
      onSignInWithGoogle,
      onSignOut,
    };
  } else {
    return {
      isAuthenticated: false,
      user: null,
      onSignInWithGoogle,
      onSignOut,
    };
  }
};
