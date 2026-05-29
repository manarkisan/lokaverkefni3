import { create } from 'zustand'
import type { Product } from '../types/supabase';
import { persist } from 'zustand/middleware'



type CartStore = {
  [x: string]: any;
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () =>void;
  getTotalPrice: () => number;
}


export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) => set((state) => ({
        cart: [...state.cart, product]
      })),
      removeFromCart: (id) => set((state) => ({
        cart: state.cart.filter(item => item.id !== id)
      })),
      clearCart: () => set({cart: []}),
      getTotalPrice: () => {
        return get().cart.reduce((total, item) => {
          return total + item.price_cents;
        }, 0)
      }
    }),
    { name: 'cart-storage' }
  )
)

