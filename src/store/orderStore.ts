import { persist } from "zustand/middleware";
import type { Product } from "../types/supabase";
import { create } from "zustand";

type Order = {
  id: string;
  items: Product[];
  totalPrice: number;
  date: string;
};

type OrderStore = {
  orders: Order[];
  placeOrder: (items: Product[], totalPrice: number) => void;
};

export const useOrderStore = create<OrderStore>()(
  persist(
    (set, get) => ({
      orders: [],
      placeOrder: (items, totalPrice) => set((state) => ({
          orders: [...state.orders, {
          id: crypto.randomUUID(),
          items,
          totalPrice,
          date: new Date().toISOString(),
        }]
      }))
    }),
    { name: "order-storage" },
  ),
);
