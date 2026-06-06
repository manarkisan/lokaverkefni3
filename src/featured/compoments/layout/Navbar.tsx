import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "#components/ui/navigation-menu";

import { useAuth } from "#hooks/useAuth";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { user, signOut } = useAuth();
  const GENRES = ["Organic", "Plastic", "Paper", "Generic"];

  return (
    <>
      <header>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col p-2 w-40">
                  {GENRES.map((genre) => (
                    <li key={genre}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={`/category/${genre}`}
                          className="block px-3 py-2 text-sm hover:bg-muted rounded-md"
                        >
                          {genre}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
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
                <NavigationMenuLink href={"/account"}>
                  Account
                </NavigationMenuLink>
                {user ? (
                  <NavigationMenuLink
                    onClick={signOut}
                    className="cursor-pointer"
                  >
                    Log out
                  </NavigationMenuLink>
                ) : (
                  <NavigationMenuLink href="/login">Log in</NavigationMenuLink>
                )}
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
    </>
  );
}
