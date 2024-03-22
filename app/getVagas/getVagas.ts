'use server'

import {PrismaClient} from "@prisma/client"
import { vagas } from "../interfaces/vaga";

const db = new PrismaClient()

const fetchVagas = async ()=> {
    
    const response = await db.vagas.findMany();
    return response
}

export default fetchVagas