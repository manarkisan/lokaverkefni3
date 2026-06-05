import { useState } from "react";
import { supabase } from "../shared/lib/supabase";
import type { Product } from "../types/supabase";

export const useSupabase = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [singleProduct, setSingleProduct] = useState<Product | null>(null);
  const [organic, setOrganic] = useState<Product[]>([]);

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
      

      .or(
        `name.ilike.%${filter}%, description.ilike.%${filter}%, genre.ilike.%${filter}%`,
      );
    if (data) {
      setFilteredProducts(data);
    }
    if (error) console.log(error);
  };

  const getSingleProduct = async (id: string) => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    if (data) {
      setSingleProduct(data);
    }
    if (error) console.log(error);
  };

  const getOrganic = async ()=> {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .ilike("genre", "organic");

    if (data) {
      setOrganic(data);
    }
    if (error) console.log(error);
  };

  return {
    products,
    getProducts,
    filteredProducts,
    getFilteredProducts,
    singleProduct,
    getSingleProduct,
    organic,
    getOrganic
  };
};
