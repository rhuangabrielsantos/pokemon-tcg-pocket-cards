import { AuthProvider } from "./Auth";

interface IProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: IProvidersProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export { Providers };
