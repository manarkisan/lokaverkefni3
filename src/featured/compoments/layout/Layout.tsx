import { useAuth } from "#hooks/useAuth";
import SearchBar from "../shared/SearchBar";
import Navbar from "./Navbar";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
   const { user } = useAuth();
  return (
    <>
     <a href='/'><h1>peepeepoopoo</h1></a> 
     {user ? (<p>Hello, {user.email}</p>) : (<p>Hello, guest.</p>)}
      <SearchBar/>
      <Navbar />
      <div>{children}</div>
    </>
  );
}
