import { use } from "react";

import HomePage from "@/modules/home/page";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

interface IHomeProps {
  searchParams: SearchParams;
}

export default function Home(props: IHomeProps) {
  const searchParams = use(props.searchParams);

  return (
    <div className="flex items-start pt-16 justify-start">
      <HomePage searchParams={searchParams} />
    </div>
  );
}
