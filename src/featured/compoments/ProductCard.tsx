import { Link, useNavigate } from "react-router-dom";
import type { Product } from "../../types/supabase";
import { Separator } from "#components/ui/separator";


export default function ProductCard({ product }: { product: Product }) {
  const navigate = useNavigate();
  const selectProduct = (e: any) => {
    e.preventDefault();
    navigate(`/product/${product.id}`);
  };

  return (
    <Link to={`/product/${product.id}`} onClick={selectProduct}>
      <div className="flex flex-col justify-center m-5 p-5">
        <h1 className="font-semibold">{product.name}</h1>
        <img src={product.image_url ?? ""} width={300} className="m-3"/>
        <p>{product.price_cents} {product.currency}</p>
        <p className="font-mono">{product.description}</p>
        
      </div><Separator />
    </Link>
  );
}
