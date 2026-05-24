import type { Product } from "../../types/supabase";
import ProductCard from "./ProductCard";

export default function SearchResults({ products }: { products: Product[] }) {
  return (
    <div>
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />
      })}
    </div>
  );
}
