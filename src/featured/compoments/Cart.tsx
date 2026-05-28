import { Button } from "#components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "#components/ui/card"
import { useState } from "react";
import { useCartStore } from "../../store/cartStore";
import type { Product } from "../../types/supabase"

export default function Cart() {
 const { cart, addToCart, removeFromCart } = useCartStore();
 const [total, setTotal] = useState(0)


    return(
        <Card>
  <CardHeader>
    <CardTitle>Cart</CardTitle>
    <CardDescription></CardDescription>
    <CardAction><Button>Proceed to Checkout</Button></CardAction>
  </CardHeader>
  <CardContent>
    {cart.map((item: Product) => {
       return <div key={item.id}>{item.name} x _ stk. {item.price_cents} {item.currency}</div> 
      })}
  </CardContent>
  <CardFooter>
    <p>Total price: </p>
  </CardFooter>
</Card>
    )
}





//   addToCart(product);