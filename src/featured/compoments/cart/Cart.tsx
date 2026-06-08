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
import { Separator } from "#components/ui/separator";


export default function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    getTotalPrice,
  } = useCartStore();
  const totalIsk = getTotalPrice();
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cart</CardTitle>
        <CardAction>
          <Button onClick={clearCart} className="flex justify-end bg-red-400">
            Clear Cart
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col">
        {cart.map((item) => (
          <div
            key={item.id}
            data-testid="cart-item"
            className="flex align-middle justify-between pb-5 pl-5"
          >
            <span className="flex flex-col gap-5">
              {item.name}
              <img src={item.image_url} className="max-w-30 flex" />
              <Separator />
            </span>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon-sm"
                onClick={() => decreaseQuantity(item.id)}
              >
                −
              </Button>
              <span>{item.quantity}</span>
              <Button
                variant="outline"
                size="icon-sm"
                onClick={() => increaseQuantity(item.id)}
              >
                +
              </Button>
              <span>
                {item.price_cents * item.quantity} {item.currency}
              </span>
              <Button
                variant="destructive"
                size="icon-sm"
                onClick={() => removeFromCart(item.id)}
              >
                ✕
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
<Separator />
      <CardFooter className="flex justify-between">
        <div className="flex flex-col w-screen">
          Total price: {totalIsk} ISK{" "}
          <Button
            className="flex bg-green-800"
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
