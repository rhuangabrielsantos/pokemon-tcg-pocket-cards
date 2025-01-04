import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

export const usePokemonListFilters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [name, setName] = useState<string>(searchParams.get("name") || "");
  const [type, setType] = useState<string>(searchParams.get("type") || "");
  const [pack, setPack] = useState<string>(searchParams.get("pack") || "");

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

    if (pack) {
      params.set("pack", pack);
    } else {
      params.delete("pack");
    }

    router.push(pathname + "?" + params.toString());
  }, [name, pathname, router, searchParams, type, pack]);

  const handleClearFilters = useCallback(() => {
    setName("");
    setType("");
    setPack("");

    router.push(pathname);
  }, [pathname, router]);

  return {
    name,
    setName,
    type,
    setType,
    pack,
    setPack,
    handleFilterCards,
    handleClearFilters,
  };
};
