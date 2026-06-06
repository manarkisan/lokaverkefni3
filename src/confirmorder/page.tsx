// src/confirmorder/page.tsx
import { useOrderStore } from "../store/orderStore";
import { useCartStore } from "../store/cartStore";
import { useEffect } from "react";
import { Link } from "react-router";
import { Button } from "#components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "#components/ui/card";

export default function OrderComplete() {
  const { orders } = useOrderStore();
  const { clearCart } = useCartStore();

  // get the most recent order
  const latestOrder = orders[orders.length - 1];

  useEffect(() => {
    clearCart();
  }, []);

  if (!latestOrder) {
    return (
      <div className="max-w-md mx-auto mt-8 text-center">
        <p>No order found.</p>
        <Button asChild className="mt-4">
          <Link to="/">Back to Shop</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">
            ✓ Order Confirmed!
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="text-sm text-muted-foreground text-center">
            Order ID: {latestOrder.id}
          </p>
          <p className="text-sm text-muted-foreground text-center">
            {new Date(latestOrder.date).toLocaleDateString()}
          </p>

          <div className="border-t pt-4">
            {latestOrder.items.map((item) => (
              <div key={item.id} className="flex justify-between py-1 text-sm">
                <span>{item.name}</span>
                <span>
                  {(item.price_cents)} {item.currency}
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-between font-semibold border-t pt-2">
            <span>Total</span>
            <span>{(latestOrder.totalPrice)} ISK</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full">
            <Link to="/">Continue Shopping</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}