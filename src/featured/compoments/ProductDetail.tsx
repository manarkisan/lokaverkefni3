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
import { useNavigate } from "react-router";
import { useCartStore } from "../../store/cartStore";

export default function ProductDetails({ product }: { product: Product }) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(1);
  const { cart, addToCart, removeFromCart } = useCartStore();

  const getRandomNumber = (max: number) => Math.floor(Math.random() * max);

  useEffect(() => {
    setHours(getRandomNumber(12));
    setMinutes(getRandomNumber(59));
  }, []);

  const navigation = useNavigate();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
        <CardAction>
          <Button
            onClick={() => {
              addToCart(product);
              navigation("/cart");
            }}
          >
            Add to Cart
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <img src={product.image_url} width={200} />
      </CardContent>
      <CardFooter>
        <p>
          Order within {hours} hrs and {minutes} minutes.
        </p>
      </CardFooter>
    </Card>
  );
}
