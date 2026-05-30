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

export default function CheckoutPage() {
  const { cart, getTotalPrice } = useCartStore();
  const totalIsk = getTotalPrice();
  const navigate = useNavigate();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Shipping Information</CardTitle>
        <CardDescription>
          Please review that all information on this page is correct.
        </CardDescription>
        <CardAction>
          <Button
            onClick={() => {
              navigate("/confirmorder");
            }}
          >
            Confirm order
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        {cart.map((item: Product) => {
          return (
            <>
              <div key={item.id}>
                {item.name}
                <img src={item.image_url} width={100} />
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
        <p>Shipping Address</p>
      </CardFooter>
    </Card>
  );
}
