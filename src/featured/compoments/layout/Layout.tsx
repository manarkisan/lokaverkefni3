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
      <a href="/">
        <h1 className="flex justify-center">Buy Some Trash!</h1>
      </a>
      <SearchBar />
      <Navbar /> {user ? <p>Hello, {user.email}</p> : <p>Hello, guest.</p>}
      <div>{children}</div>
    </>
  );
}
