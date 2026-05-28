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
import { useCartStore } from "../../store/cartStore";
import type { Product } from "../../types/supabase"

export default function Cart() {
 const { cart, addToCart, removeFromCart, getTotalPrice } = useCartStore();
 const totalIsk = getTotalPrice()



    return(
        <Card>
  <CardHeader>
    <CardTitle>Cart</CardTitle>
    <CardDescription></CardDescription>
    <CardAction><Button>Proceed to Checkout</Button></CardAction>
  </CardHeader>
  <CardContent>
    {cart.map((item: Product) => {
       return <><div key={item.id}>{item.name} x _ stk. {item.price_cents} {item.currency}</div><Button onClick={() => {removeFromCart(item.id)}}>Remove from Cart</Button></>
      })}
  </CardContent>
  <CardFooter>
    <div >Total price: {totalIsk} ISK</div>
  </CardFooter>
</Card>
    )
}





//   addToCart(product);