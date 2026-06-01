import SearchBar from "../shared/SearchBar";
import Navbar from "./Navbar";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
     <a href='/'><h1>peepeepoopoo</h1></a>
      <SearchBar/>
      <Navbar />
      <div>{children}</div>
    </>
  );
}
