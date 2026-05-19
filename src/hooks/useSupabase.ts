import { useState } from "react";
import { supabase } from "../shared/lib/supabase";

export const useSupabase = () => {
  const [products, setProducts] = useState<any[]>([]);

  const getProducts = async () => {
    const { data, error } = await supabase.from("products").select("*");

    if (data) {
      setProducts(data);
    }
    if (error) console.log(error);
  };

  return { products, getProducts };
};
