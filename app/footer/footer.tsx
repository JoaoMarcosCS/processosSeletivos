import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import {Separator} from "@/components/ui/separator"
import {Plus, Eye} from 'lucide-react'



export const Footer = () => {
    return (
      <div className="flex justify-center items-center w-full fixed bottom-0 ">
        <Menubar>
        <MenubarMenu>
          <MenubarTrigger><Eye/> Meus processos</MenubarTrigger>
          <Separator orientation="vertical"/>
          <MenubarTrigger><Plus /> Adicionar</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      </div>
    )
}