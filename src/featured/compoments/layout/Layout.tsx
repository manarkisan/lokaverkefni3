import SearchBar from "../shared/SearchBar";
import Navbar from "./Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SearchBar/>
      <Navbar />
    </>
  );
}
