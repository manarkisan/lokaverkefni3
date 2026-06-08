import { useAuth } from "#hooks/useAuth";
import SearchBar from "../shared/SearchBar";
import Footer from "./Footer";
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
        <h1 className="flex justify-center font-mono text-[40px] font-bold text-mist-600 text-shadow-xs">Buy Some Trash!</h1>
      </a>
      <SearchBar />
      <Navbar /> 
      <div className="bg-blue-100 p-5 h-screen">{children}</div>
      <Footer />
    </>
  );
}
