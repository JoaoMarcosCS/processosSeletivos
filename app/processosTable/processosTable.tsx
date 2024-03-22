
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
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import fetchVagas from "../getVagas/getVagas";
import { useEffect, useState } from "react";
import { vagas } from "../interfaces/vaga";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient()

export const ProcessosTable = async () => {
    const vagas = await db.vagas.findMany();
    return (
        <div className="w-11/12 flex flex-col mt-5 mb-16">
        <Accordion type="single" collapsible className="no-underline border-2 shadow-sm rounded-lg px-4 mt-4">
            <AccordionItem value="item-1">
                <AccordionTrigger className="flex justify-between ">Processos</AccordionTrigger>
                <AccordionContent>
                    <Table className=" shadow-2xl border rounded hover:border-collapse">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Nome</TableHead>
                                <TableHead>Link</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                            {vagas.map((vaga) => (
                                <TableRow key={vaga.id}>
                                    <TableCell className="font-medium">{vaga.nome}</TableCell>
                                    <TableCell><a href={vaga.link} target="_blank" className="text-cyan-600">Ver</a></TableCell>
                                    <TableCell>{vaga.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>

                        </TableBody>
                    </Table>
                </AccordionContent>
            </AccordionItem>

        </Accordion>
        </div>

        
    )
}
