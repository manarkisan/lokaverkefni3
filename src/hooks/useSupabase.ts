import { useState } from "react";
import { supabase } from "../shared/lib/supabase";
import type { Product } from "../types/supabase";

export const useSupabase = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  // const [singleProduct, setSingleProduct] = useState<any>(0);

  const getProducts = async () => {
    const { data, error } = await supabase.from("products").select("*");

    if (data) {
      setProducts(data);
    }
    if (error) console.log(error);
  };

  const getFilteredProducts = async (filter: string) => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      // .ilike("title", `%${filter}%`);
      
      .or(`title.ilike.%${filter}%, description.ilike.%${filter}%, category.ilike.%${filter}%, name.ilike.%${filter}%`);
    if (data) {
      setFilteredProducts(data);
    }
    if (error) console.log(error);
  };

  return { products, getProducts, filteredProducts, getFilteredProducts };
};
