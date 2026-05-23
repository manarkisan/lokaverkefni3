import { useSupabase } from "#hooks/useSupabase";
import { useEffect } from "react";

import { useParams } from "react-router-dom";
import SearchResults from "../../featured/compoments/SearchResults";

export default function QueryPage() {
  const { filteredProducts, getFilteredProducts, products, getProducts } = useSupabase();
  const { query } = useParams<{ query: string }>();

  useEffect(() => {
    getFilteredProducts(query || "");
    getProducts();
  }, [getFilteredProducts, query]);

  return (
    <>
      <div>Search Results for {query}...</div>
      <SearchResults products={filteredProducts} />
    </>
  );
}
