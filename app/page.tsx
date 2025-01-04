import { use } from "react";

import HomePage from "@/modules/home/page";
import Header from "@/components/header";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

interface IHomeProps {
  searchParams: SearchParams;
}

export default function Home(props: IHomeProps) {
  const searchParams = use(props.searchParams);

  return (
    <div className="flex flex-col gap-6 items-start pt-8 justify-start w-[1250px] px-4">
      <Header />

      <HomePage searchParams={searchParams} />
    </div>
  );
}
