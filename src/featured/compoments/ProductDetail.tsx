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
    <Card className="w-md">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
        <CardAction>
          <Button
            onClick={() => {
              addToCart(product);
              setShowAlert(true);
              setTimeout(() => setShowAlert(false), 3000);
            }}
          >
            Add to Cart
          </Button>
        </CardAction>
        {showAlert && <CartAlert onClose={() => setShowAlert(false)} />}
      </CardHeader>
      <CardContent>
        <img src={product.image_url ?? ""} width={200} />
        {product.price_cents} {product.currency}
      </CardContent>
    </Card>
  );
}
