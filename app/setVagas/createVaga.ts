"use server"

import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"

const db = new PrismaClient()

const createVaga = async (link:string, nome: string) => {
    await db.vagas.create({
        data:{
          link: link,
          nome: nome,
        }
      }).then(()=> { console.log("Registo criado")}).catch((error) => { console.log(`Erro: ${error}`)})
  
      revalidatePath("/");
}

export default createVaga;