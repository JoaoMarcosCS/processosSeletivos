import { Footer } from "./footer/footer";
import { ProcessosTable } from "./processosTable/processosTable";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col px-6 bg-gray-100	">
      <h1 className="mt-3 text-xl font-semibold">Resumo financeiro</h1>
    <ProcessosTable/>
    <Footer/>
    </main>
  );
}
