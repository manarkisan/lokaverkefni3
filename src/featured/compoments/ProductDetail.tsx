import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "#components/ui/card";

import { useState } from "react";
import type { Product } from "../../types/supabase";
import { Button } from "#components/ui/button";
import { useCartStore } from "../../store/cartStore";
import CartAlert from "./layout/Alert";

export default function ProductDetails({ product }: { product: Product }) {
  const { addToCart } = useCartStore();
  const [showAlert, setShowAlert] = useState(false);

  return (
    <Card className="w-lg flex justify-center gap-3">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        
        <CardAction className="flex flex-col justify-center">
          <Button
            onClick={() => {
              addToCart(product);
              setShowAlert(true);
              setTimeout(() => setShowAlert(false), 3000);
            }}
          >
            Add to Cart
          </Button>
          {product.price_cents} {product.currency}
        </CardAction>
        {showAlert && <CartAlert onClose={() => setShowAlert(false)} />}
      </CardHeader>
      <CardContent>
        <img src={product.image_url ?? ""} width={200} />
        <CardDescription className="p-3">{product.description}</CardDescription>
      </CardContent>
    </Card>
  );
}
