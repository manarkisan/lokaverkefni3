import { Link, useNavigate } from "react-router-dom";
import type { Product } from "../../types/supabase";
import { getImageUrl } from "../../shared/lib/supabase";

export default function ProductCard({ product }: { product: Product }) {
    const navigate = useNavigate()
    const selectProduct = (e: any) => {
        e.preventDefault();
        navigate(`/product/${product.id}`)
    } 

     const imageUrl = getImageUrl('products', product.slug)
  return (
    <Link href={`/product/${product.id}`} onClick={selectProduct}>
    <div>
      {product.name} 
      <img src={product.image_url} width={200}/>
      <img src={imageUrl} width={200} />
      {product.price_cents} {product.currency} 
      {product.description} 
    </div></Link>
    
  );
}


// {product.blablabla.substring(0, 10)}...