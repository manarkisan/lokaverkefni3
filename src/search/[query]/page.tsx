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
   <div className="max-w-7xl mx-auto px-4 py-8">
  <h1 className="text-2xl font-semibold mb-6">
    Search Results for "{query}"
  </h1>
  <SearchResults products={filteredProducts} />
</div>
  );
}


