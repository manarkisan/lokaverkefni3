import { useParams } from "react-router";
import { useSupabase } from "#hooks/useSupabase";
import { useEffect } from "react";
import SmallCard from "../featured/compoments/Dashboard/SmallCard";

export default function CategoryPage() {
  const { genre } = useParams();
  const { products, getProducts, getProductsByGenre } = useSupabase();

  useEffect(() => {
    getProducts();
  }, []);

  const categoryProducts = getProductsByGenre(genre ?? "");

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">{genre}</h1>
      {categoryProducts.length === 0 ? (
        <p className="text-muted-foreground">No products found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categoryProducts.map((product) => (
            <SmallCard
              key={product.id}
              id={product.id}
              heading={product.name}
              image={product.image_url ?? ""}
              price={product.price_cents}
              currency={product.currency}
            />
          ))}
        </div>
      )}
    </div>
  );
}
