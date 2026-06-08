import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "#components/ui/card";

import { useEffect, useState } from "react";
import type { Product } from "../../types/supabase";
import { Button } from "#components/ui/button";
import { useCartStore } from "../../store/cartStore";
import CartAlert from "./layout/Alert";

export default function ProductDetails({ product }: { product: Product }) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(1);
  const { cart, addToCart } = useCartStore();
  const [showAlert, setShowAlert] = useState(false);

  const getRandomNumber = (max: number) => Math.floor(Math.random() * max);

  useEffect(() => {
    setHours(getRandomNumber(12));
    setMinutes(getRandomNumber(59));
  }, []);

  return (
    <Card>
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
        <img src={product.image_url} width={200} />
        {product.price_cents} {product.currency}
      </CardContent>
      <CardFooter>
        <p>
          Order within {hours} hrs and {minutes} minutes.
        </p>
      </CardFooter>
    </Card>
  );
}
