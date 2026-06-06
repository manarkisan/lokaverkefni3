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

export default function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, getTotalPrice } =
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
       {cart.map((item) => (
  <div key={item.id} className="flex items-center justify-between py-2">
    <span className="max-w-40 flex">{item.name}</span>
    <img src={item.image_url} className="max-w-40"/>
    <div className="flex items-center gap-2">
      <Button variant="outline" size="icon-sm"
        onClick={() => decreaseQuantity(item.id)}>−</Button>
      <span>{item.quantity}</span>
      <Button variant="outline" size="icon-sm"
        onClick={() => increaseQuantity(item.id)}>+</Button>
      <span>{(item.price_cents * item.quantity)} {item.currency}</span>
      <Button variant="destructive" size="icon-sm"
        onClick={() => removeFromCart(item.id)}>✕</Button>
    </div>
  </div>
))}
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
