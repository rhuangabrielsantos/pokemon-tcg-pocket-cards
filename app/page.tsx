import HomePage from "@/modules/home/page";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 items-start pt-8 justify-start w-[1250px] px-4">
      <Header />
      <HomePage />
    </div>
  );
}
