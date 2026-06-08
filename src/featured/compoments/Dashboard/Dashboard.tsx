import { useSupabase } from "#hooks/useSupabase";
import { useEffect } from "react";
import SmallCard from "./SmallCard";
import { Link } from "react-router";

const CATEGORIES = ['Organic', 'Plastic', 'Paper', 'Generic'];

export default function Dashboard() {
  const { products, getProducts, getProductsByGenre } = useSupabase();

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <>
      
      <div className="flex flex-col items-center py-12 text-center">
        <h1 className="text-3xl font-bold mb-2">Hello and welcome!</h1>
        <p className="text-muted-foreground">Would you like to buy some trash?</p>
      </div>

      
      {CATEGORIES.map((category) => {
        const categoryProducts = getProductsByGenre(category);
        if (categoryProducts.length === 0) return null;

        return (
          <div key={category} className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">{category}</h2>
              <Link 
                to={`/search/${category}`}
                className="text-sm text-muted-foreground hover:underline"
              >
                See all
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categoryProducts.slice(0, 4).map((product) => (
                <SmallCard
                  key={product.id}
                  id={product.id}
                  heading={product.name}
                  image={product.image_url ?? ''}
                  price={product.price_cents}
                  currency={product.currency}
                />
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}