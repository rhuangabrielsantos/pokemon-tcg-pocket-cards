import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

export const usePokemonListFilters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [name, setName] = useState<string>(searchParams.get("name") || "");
  const [type, setType] = useState<string>(searchParams.get("type") || "");

  const handleFilterCards = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (name) {
      params.set("name", name);
    } else {
      params.delete("name");
    }

    if (type) {
      params.set("type", type);
    } else {
      params.delete("type");
    }

    router.push(pathname + "?" + params.toString());
  }, [name, pathname, router, searchParams, type]);

  const handleClearFilters = useCallback(() => {
    setName("");
    setType("");

    router.push(pathname);
  }, [pathname, router]);

  return {
    name,
    type,
    setName,
    setType,
    handleFilterCards,
    handleClearFilters,
  };
};
