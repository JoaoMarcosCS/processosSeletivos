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

import { Separator } from "@/components/ui/separator"


export const Footer = () => {

  return (
    <div className="w-full justify-around rounded-s-full mx-10 items-center  shadow-inner py-2 px-6 flex fixed  bottom-0 bg-gray-100">
      <button className="flex justify-center items-center font-medium flex-col px-1 transition text-xs hover:scale-105 hover:text-green-500	 focus:text-green-500"><Eye/>Ver</button>
      <Separator orientation="vertical" />
      <Dialog>
      <DialogTrigger asChild>
      <button className="flex justify-center items-center font-medium flex-col px-1 transition text-xs hover:scale-105 hover:text-green-500	 focus:text-green-500"><Plus/>Adicionar</button>
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
