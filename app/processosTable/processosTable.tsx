'use client'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { db } from "../utils/db"
import { useEffect, useState } from "react";


export const ProcessosTable = () => {

    const [vagas, setVagas] = useState([{}]);

    useEffect(()=>{
        async function fetchData() {
            try {
              const result = await db.vagas.findMany();
              setVagas(result);
            } catch (error) {
              console.error('Erro ao buscar os dados:', error);
            }
    }},[vagas])

    return (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead className="w-[100px]">Nome</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Link</TableHead>
            </TableRow>
            {/* {vagas.map((vaga) => {
                <TableRow key={vaga.nome}>
                <TableCell className="font-medium">{}</TableCell>
                <TableCell>{}</TableCell>
                <TableCell>{}</TableCell>
                <TableCell className="text-right">{}</TableCell>
              </TableRow>
            })} */}
        </TableHeader>
        <TableBody>
            
        </TableBody>
    </Table>
    )
}
