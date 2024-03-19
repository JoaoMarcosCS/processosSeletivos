import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import {Plus} from 'lucide-react'



export const Footer = () => {
    return (
        <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Ver</MenubarTrigger>
          <MenubarTrigger><Plus /></MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    )
}