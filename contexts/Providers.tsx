import { StorageProvider } from "./Storage";

interface IProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: IProvidersProps) => {
  return <StorageProvider>{children}</StorageProvider>;
};

export { Providers };
