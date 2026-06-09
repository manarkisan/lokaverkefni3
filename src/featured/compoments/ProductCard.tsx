import { Link, useNavigate } from "react-router-dom";
import type { Product } from "../../types/supabase";
import placeholder from "../public/favicon.svg"

export default function ProductCard({ product }: { product: Product }) {
  const navigate = useNavigate();
  const selectProduct = (e: any) => {
    e.preventDefault();
    navigate(`/product/${product.id}`);
  };

  return (
    <Link to={`/product/${product.id}`} onClick={selectProduct}>
      <div>
        {product.name}
        <img src={product.image_url ?? placeholder} width={200} />
        {product.price_cents} {product.currency}
        {product.description}
      </div>
    </Link>
  );
}
