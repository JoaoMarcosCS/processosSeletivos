'use server'

import {PrismaClient} from "@prisma/client"

const db = new PrismaClient()

const fetchVagas = async () => {
    
    const vagas = await db.vagas.findMany();
    return vagas
}

export default fetchVagas