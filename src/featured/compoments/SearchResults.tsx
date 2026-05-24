import ProductCard from "./ProductCard";

export default function SearchResults({ products }: { products: any[] }) {
  return (
    <div>
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />
        // <div key={product.id}>{product.name}</div>;
      })}
    </div>
  );
}
