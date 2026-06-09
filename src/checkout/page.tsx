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
import { useNavigate } from "react-router";
import { useCartStore } from "../store/cartStore";
import type { Product } from "../types/supabase";
import { useOrderStore } from "../store/orderStore";
import placeholder from "https://manarkisan.neocities.org/art01/kisa2024.png"

export default function CheckoutPage() {
  const { cart, getTotalPrice, clearCart } = useCartStore();
  const { placeOrder } = useOrderStore();
  const totalIsk = getTotalPrice();

  const handlePlaceOrder = () => {
    placeOrder(cart, getTotalPrice());
    clearCart();
  };

  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Shipping Information</CardTitle>
        <CardDescription>
          Please review that all information on this page is correct.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {cart.map((item: Product) => {
          return (
            <>
              <div key={item.id}>
                {item.name}
                <img src={item.image_url ?? placeholder} width={100} />
                {item.price_cents} {item.currency}
              </div>
              <hr />
            </>
          );
        })}{" "}
        <div>
          Subtotal: {totalIsk} ISK <br /> Shipping: 500 ISK <br />
          Total (with shipping): {totalIsk + 500} ISK
        </div>
      </CardContent>
      <CardFooter>
        <CardAction>
          <Button className="flex w-auto"
            onClick={() => {
              handlePlaceOrder();
              navigate("/confirmorder");
            }}
          >
            Confirm order
          </Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
}
