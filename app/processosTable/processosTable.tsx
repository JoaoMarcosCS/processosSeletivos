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
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
//import { db } from "../utils/db"
import { useEffect, useState } from "react";


const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
]

export const ProcessosTable = () => {

    // const [vagas, setVagas] = useState([{}]);

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const result = await db.vagas.findMany();
    //             setVagas(result);
    //         } catch (error) {
    //             console.error('Erro ao buscar os dados:', error);
    //         }
    //     }
    // }, [vagas])

    return (
        <Accordion type="single" collapsible className=" w-11/12">
            <AccordionItem value="item-1">
                <AccordionTrigger>Processos seletivos</AccordionTrigger>
                <AccordionContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Nome</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Link</TableHead>
                            </TableRow>
                            {invoices.map((invoice) => (
                                <TableRow key={invoice.invoice}>
                                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                    <TableCell>{invoice.paymentStatus}</TableCell>
                                    <TableCell>{invoice.paymentMethod}</TableCell>
                                    <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>

                        </TableBody>
                    </Table>
                </AccordionContent>
            </AccordionItem>

        </Accordion>
    )
}
