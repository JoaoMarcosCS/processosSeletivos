import { Suspense } from "react";
import { Footer } from "./footer/footer";
import { ProcessosTable } from "./processosTable/processosTable";

export default function Home() {
  
    // const [vagas, setVagas] = useState<vaga[]>([]);

    // useEffect(()=>{
    //     async function getVagas(){
    //         const data = await fetchVagas();
    //         setVagas(data);
    //     }

    //     getVagas();
    // }, [vagas])
  return (
    <main className="flex items-center justify-center flex-col px-6 bg-gray-100	">
      <h1 className="mt-3 text-xl font-semibold">Resumo financeiro</h1>
    <Suspense fallback="Carregando...">
    <ProcessosTable/>
    </Suspense>
    <Footer/>
    </main>
  );
}
