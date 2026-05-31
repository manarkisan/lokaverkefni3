import { useState } from "react";
import { supabase } from "../shared/lib/supabase";
import type { Product } from "../types/supabase";

export const useSupabase = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [singleProduct, setSingleProduct] = useState<Product | null>(null);
  const [pendant, setPendant] = useState<Product[]>();

  const getProducts = async () => {
    const { data, error } = await supabase.from("products").select("*");

    if (data) {
      setProducts(data);
    }
    if (error) console.log(error);
  };

//images
//   const { data } = supabase.storage
//     .from('product_assets')
//     .getPublicUrl('asset_url', {transform: {
//         width: 200,
//         height: 200,
//         resize: 'cover'
//       },
// })
      

  const getFilteredProducts = async (filter: string) => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      // .ilike("title", `%${filter}%`);

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

  const getPendant = async ()=> {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .ilike("genre", "pendant");

    if (data) {
      setSingleProduct(data);
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
  };
};
