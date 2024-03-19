import { Footer } from "./footer/footer";
import { ProcessosTable } from "./processosTable/processosTable";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col">
      <h1>Meus processos </h1>
    <ProcessosTable/>
    <Footer/>
    </main>
  );
}
