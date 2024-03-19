import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import { Plus, Eye } from 'lucide-react'



export const Footer = () => {
  return (
    <div className="w-full justify-center items-center gap-2 border-t border-gray-100	 flex fixed  bottom-0">
      <Button  size="lg" variant={"outline"}><Eye/>Ver processos</Button>
      <Separator orientation="vertical"/>
      <Button  size="lg" variant={"outline"}><Plus/>Adicionar processo</Button>
    </div>
  )
}