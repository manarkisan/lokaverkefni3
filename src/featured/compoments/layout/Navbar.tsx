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
      <header className="flex justify-center"> 
        <NavigationMenu>
          <NavigationMenuList className="flex justify-center">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col p-2 w-100">
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
              <NavigationMenuContent className="min-w-100">
                <NavigationMenuLink href={"/login"}>Login</NavigationMenuLink>
                <NavigationMenuLink href={"/signup"}>Signup</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>My Cart</NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-100">
                <NavigationMenuLink href={"/cart"}>My Cart</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>My Account</NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-100">
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
        <span className="flex align-middle absolute right-0 pt-1">{user ? <p>Hello, {user.email}</p> : <p>Hello, guest.</p>}</span>
        
      </header>
    </>
  );
}
