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


export const Footer = () => {
  return (
    <div className="w-full justify-center items-center gap-2 border-t border-gray-100	bg-	 flex fixed  bottom-0">
      <Button  size="lg" className="px-6" variant={"outline"}><Eye/>Ver processos</Button>
      <Dialog>
      <DialogTrigger asChild>
      <Button  size="lg" variant={"outline"}><Plus/>Adicionar processo</Button>
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
