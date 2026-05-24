import { Link } from "react-router-dom";

export default function ProductCard({ product }: { product: any }) {
  return (
    <Link href={`/product/${product.id}`}>
    <div>
      {product.name} 
      {product.price_cents} {product.currency} 
      {product.description} 
    </div></Link>
  );
}


// {product.blablabla.substring(0, 10)}...