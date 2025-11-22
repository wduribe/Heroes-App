import { NavigationMenuItem, NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { Link, useLocation } from "react-router";
import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

export const CustomMenu = () => {

    const { pathname } = useLocation();

    const isActive = (path: string) => {
        return path === pathname;
    }

    return (
        <NavigationMenu className="py-5">
            <NavigationMenuList>
                {/* Search */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={cn(isActive('/')&& 'bg-slate-200', 'p-2 rounded-sm'  )}>
                        <Link to="/">Inicio</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Search */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={cn(isActive('/search')&& 'bg-slate-200', 'p-2 rounded-sm' )}>
                        <Link to="/search">Buscar Superhéroes</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
