export default function ProductCard({ product }: { product: any }) {
  return (
    <div>
      {product.name} 
      {product.price_cents}{product.currency} 
      {product.description} 
    </div>
  );
}
