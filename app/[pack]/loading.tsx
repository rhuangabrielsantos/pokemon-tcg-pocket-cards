import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="overflow-auto w-screen font-sans">
      <div className="container mx-auto px-8 ">
        <header className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <img
            src="/logo-poke-album.png"
            alt="Poke Album"
            style={{ width: 80, height: 80 }}
          />

          <Skeleton className="h-9 w-1/6" />
        </header>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-4/6">
              <h2 className="text-4xl font-bold mb-4 capitalize">
                <Skeleton className="h-12 w-1/2" />
              </h2>
              <p className="text-xl mb-6">
                Essas são as suas estatísticas (cartas obtidas do pacote / total
                cartas do pacote), atualize os dados clicando nas cartas abaixo
                e saiba quantas cartas você já possui de cada pacote!
              </p>
            </div>
            <div className="md:w-2/6 flex justify-center">
              <div className="flex items-center justify-center gap-4">
                <div className="flex flex-col items-center justify-center gap-2">
                  <Skeleton className="h-64 w-32" />
                  <Skeleton className="h-5 w-20" />
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                  <Skeleton className="h-64 w-32" />
                  <Skeleton className="h-5 w-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-start flex-col gap-8">
        <main className="flex flex-col items-center gap-10 container mx-auto px-4">
          <div className="flex flex-wrap justify-start items-center gap-4 w-full mb-12">
            <Skeleton className="h-80 w-[230px]" />
            <Skeleton className="h-80 w-[230px]" />
            <Skeleton className="h-80 w-[230px]" />
            <Skeleton className="h-80 w-[230px]" />
            <Skeleton className="h-80 w-[230px]" />
          </div>
        </main>
      </section>
    </div>
  );
};

export default Loading;
