import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"



export const Footer = () => {
    return (
        <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Processos</MenubarTrigger>
          <MenubarTrigger>+</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    )
}