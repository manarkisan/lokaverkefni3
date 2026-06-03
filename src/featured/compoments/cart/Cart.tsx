import { Button } from "#components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "#components/ui/card";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../../store/cartStore";
import type { Product } from "../../../types/supabase";

export default function Cart() {
  const { cart, addToCart, removeFromCart, clearCart, getTotalPrice } =
    useCartStore();
  const totalIsk = getTotalPrice();
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cart</CardTitle>
        <CardDescription></CardDescription>
        <CardAction>
          <Button onClick={clearCart}>Clear Cart</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        {cart.map((item: Product) => {
          return (
            <>
              <div key={item.id}>
                {item.name} x _ stk. {item.price_cents} {item.currency}
              </div>
              <Button
                onClick={() => {
                  addToCart(item);
                }}
              >
                Add more to Cart
              </Button>
              <Button
                onClick={() => {
                  removeFromCart(item.id);
                }}
              >
                Remove from Cart
              </Button>
            </>
          );
        })}
      </CardContent>
      <CardFooter>
        <div>Total price: {totalIsk} ISK</div>
        <div>
          <Button
            onClick={() => {
              navigate("/checkout");
            }}
          >
            Proceed to Checkout
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
