import { useSupabase } from "#hooks/useSupabase";
import { useEffect } from "react";

import { useParams } from "react-router-dom";

export default function QueryPage() {
  const { filteredProducts, getFilteredProducts } = useSupabase();
  const { query } = useParams<{ query: string }>();

  useEffect(() => {
    getFilteredProducts(query || "")
  }, [getFilteredProducts, query]);
  
  return <div>Search Results for {query}...</div>;
}
