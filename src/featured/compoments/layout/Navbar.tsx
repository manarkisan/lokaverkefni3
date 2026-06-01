import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "#components/ui/navigation-menu";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Vöruflokkar</NavigationMenuTrigger>
              <NavigationMenuContent>
                 <NavigationMenuLink href={"/confirmorder"}
                >
                  Plast
                </NavigationMenuLink>
                 <NavigationMenuLink href={"/login"}
                >
                  Pappi
                </NavigationMenuLink>
                 <NavigationMenuLink href={"/confirmorder"}
                >
                  Lífrænt
                </NavigationMenuLink>
                 <NavigationMenuLink href={"/login"}
                >
                  Almennt
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Login</NavigationMenuTrigger> 
                <NavigationMenuContent>
                <NavigationMenuLink href={"/login"}
                >
                  Login
                </NavigationMenuLink>
             </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
    </>
  );
}
