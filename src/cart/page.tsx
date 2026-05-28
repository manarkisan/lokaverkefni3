import { useCartStore } from "../store/cartStore";
import type { Product } from "../types/supabase";

export default function CartPage() {
  const { cart, addToCart, removeFromCart } = useCartStore();
  //   addToCart(product);
  return (
    <div>
      {cart.map((item: Product) => {
       return <div key={item.id}>{item.name} x _ stk.</div> 
      })}
    </div>
  );
}
