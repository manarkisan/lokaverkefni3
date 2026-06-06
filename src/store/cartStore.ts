import { create } from "zustand";
import type { Product } from "../types/supabase";
import { persist } from "zustand/middleware";

// cartStore.ts
type CartItem = Product & { quantity: number };

type CartStore = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product) => set((state) => {
        const existing = state.cart.find(item => item.id === product.id);
        if (existing) {
          // already in cart, just increase quantity
          return {
            cart: state.cart.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          };
        }
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }),

      removeFromCart: (id) => set((state) => ({
        cart: state.cart.filter(item => item.id !== id)
      })),

      increaseQuantity: (id) => set((state) => ({
        cart: state.cart.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      })),

      decreaseQuantity: (id) => set((state) => ({
        cart: state.cart.map(item =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ).filter(item => !(item.id === id && item.quantity === 1))
      })),

      clearCart: () => set({ cart: [] }),

      getTotalPrice: () => {
        return get().cart.reduce((total, item) => {
          return total + item.price_cents * item.quantity;
        }, 0)
      }
    }),
    { name: 'cart-storage' }
  )
)