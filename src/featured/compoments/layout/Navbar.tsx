import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "#components/ui/navigation-menu";

export default function Navbar() {
  return (
    <>
      <header>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem >
              <NavigationMenuTrigger>Vöruflokkar</NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-50">
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
                <NavigationMenuContent className="min-w-50">
                <NavigationMenuLink href={"/login"}
                >
                  Login
                </NavigationMenuLink>
             </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>My Cart</NavigationMenuTrigger> 
                <NavigationMenuContent className="min-w-50">
                <NavigationMenuLink href={"/cart"}
                >
                  My Cart
                </NavigationMenuLink>
             </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
    </>
  );
}
