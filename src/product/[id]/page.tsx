import { useSupabase } from "#hooks/useSupabase"
import { useEffect } from "react";
import { useParams } from "react-router";
import ProductDetails from "../../featured/compoments/ProductDetail";

export default function ProductPage() {
    const {singleProduct, getSingleProduct} = useSupabase();

    const {id} = useParams();

    useEffect(() => {
        getSingleProduct(id);
    }, [getSingleProduct])
    return <div><ProductDetails product={singleProduct} /></div>
}