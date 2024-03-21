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
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, Eye } from 'lucide-react'
import {z} from "zod"
import {zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { PrismaClient } from '@prisma/client';
import { Separator } from "@/components/ui/separator"


const FormSchema = z.object({
  nome: z.string(),
  link: z.string(),
  status: z.enum(['EM_ANDAMENTO', 'AGUARDANDO_RETORNO', 'REPROVADO', 'APROVADO']),
});


export const Footer = () => {

  return (
    <div className="w-full justify-around items-center  shadow-inner py-5 px-6 flex fixed  bottom-0">
      <button className="flex justify-center items-center flex-col px-1"><Eye/></button>
      <Separator orientation="vertical" />
      <Dialog>
      <DialogTrigger asChild>
      <button className="flex justify-center items-center flex-col px-1 text"><Plus/> </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className=" text-center">Adicionar processo</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
        </div>
        <DialogFooter>
          <Button type="submit">Adicionar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  )
}
