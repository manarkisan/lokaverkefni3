import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "#components/ui/input-group";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState<string>("");

  const navigate = useNavigate();

  const searchProducts = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     if (!query.trim()) return;
    navigate(`/search/${query}/`)
  };


  return (
    <form onSubmit={searchProducts}>
    <InputGroup>
      <InputGroupInput
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
     
      <InputGroupAddon>
        <SearchIcon /> 
      </InputGroupAddon><InputGroupButton 
      type="submit"
      aria-label="search"
      >Find thy thing!</InputGroupButton>
    </InputGroup></form>
  );
}
