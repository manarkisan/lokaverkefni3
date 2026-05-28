import { create } from 'zustand'
import type { Product } from '../types/supabase';
import { persist } from 'zustand/middleware'



type CartStore = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
}


export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product) => set((state) => ({ 
        cart: [...state.cart, product], 
       
      })),
      removeFromCart: (id) => set((state) => ({ 
    cart: state.cart.filter(item => item.id !== id) 
  })),
    }),
    { name: 'cart-storage' }
  )
) 




