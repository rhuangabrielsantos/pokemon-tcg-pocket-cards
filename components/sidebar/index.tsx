"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

const collections = [
  {
    path: "/",
    logo: "/logo-poke-album.png",
  },
  {
    path: "/genetic-apex",
    logo: "logo-genetic-apex.webp",
  },
  {
    path: "/mythical-island",
    logo: "logo-mythical-island.webp",
  },
  {
    path: "/space-time-smackdown",
    logo: "logo-space-time-smackdown.webp",
  },
  {
    path: "/triumphant-light",
    logo: "logo-triumphant-light.webp",
  },
  {
    path: "/promo-a",
    logo: "logo-promo-a.webp",
  },
];

export const Sidebar: FC = () => {
  const currentPath = usePathname();

  return (
    <nav className="z-20 flex justify-around gap-4 border-t border-gray-200 bg-white/50 p-2.5 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 fixed top-2/4 -translate-y-2/4 left-3 min-h-[auto] min-w-[64px] flex-col rounded-lg border">
      {collections.map((collection) => (
        <Link
          key={collection.path}
          href={collection.path}
          className={cn(
            "flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-indigo-600 dark:bg-sky-900 dark:text-sky-50",
            currentPath === collection.path
              ? "bg-indigo-100 dark:bg-sky-900"
              : "hover:bg-indigo-50 dark:hover:bg-sky-800"
          )}
        >
          <img src={collection.logo} />
        </Link>
      ))}
    </nav>
  );
};
