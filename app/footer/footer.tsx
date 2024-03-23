'use client'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, Eye } from 'lucide-react'

import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import { vaga } from "../interfaces/vaga"
import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"
import createVaga from "../setVagas/createVaga"

const db = new PrismaClient();

export const Footer = () => {

  const [nome, setNome] = useState("")
  const [link, setLink] = useState("")

  const handleSubmit = async () => {
    try{
      await createVaga(link,nome);
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div className="w-full justify-around mx-10 items-center border-2 border-slate-200	 py-2 px-6 flex fixed  bottom-0 bg-gray-100">
      <button className="flex justify-center items-center font-medium flex-col px-1 transition text-xs hover:scale-105 hover:text-green-500	 focus:text-green-500"><Eye/>Ver</button>
      <Separator orientation="vertical" />
      <Dialog>
      <DialogTrigger asChild>
      <button className="flex justify-center items-center font-medium flex-col px-1 transition text-xs hover:scale-105 hover:text-green-500	 focus:text-green-500"><Plus/>Adicionar</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
         
          <DialogTitle className=" text-center" >Adicionar processo</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <label htmlFor="nome">Nome do processo:</label>
        <input type="text" name="nome" placeholder="Bradesco, BTG..." onChange={(e)=>{setNome(e.target.value)}} />
        <label htmlFor="link">Cole a url do processo: </label>
        <input type="text" name="link" placeholder="http:\\bradesco.estagio/candidaturas" onChange={(e)=>{setLink(e.target.value)}} id="" />
        </div>
        <DialogFooter>
          <DialogClose  asChild>
          <Button type="submit" onClick={handleSubmit}>Adicionar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  )
}
