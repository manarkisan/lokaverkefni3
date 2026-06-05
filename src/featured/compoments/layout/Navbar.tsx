import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "#components/ui/navigation-menu";

import { useAuth } from "#hooks/useAuth";

export default function Navbar() {
    const { user, signOut } = useAuth();
  

  
  return (
    <>
      <header>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-50">
                <NavigationMenuLink href={"/confirmorder"}>
                  Plastic
                </NavigationMenuLink>
                <NavigationMenuLink href={"/login"}>Paper</NavigationMenuLink>
                <NavigationMenuLink href={"/confirmorder"}>
                  Organic
                </NavigationMenuLink>
                <NavigationMenuLink href={"/login"}>Generic</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Login</NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-50">
                <NavigationMenuLink href={"/login"}>Login</NavigationMenuLink>
                <NavigationMenuLink href={"/signup"}>Signup</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>My Cart</NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-50">
                <NavigationMenuLink href={"/cart"}>My Cart</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>My Account</NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-50">
                <NavigationMenuLink href={"/account"}>Account</NavigationMenuLink>
                {user ? (
  <NavigationMenuLink onClick={signOut} className="cursor-pointer">
    Log out
  </NavigationMenuLink>
) : (
  <NavigationMenuLink href="/login">
    Log in
  </NavigationMenuLink>
)}
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
    </>
  );
}
