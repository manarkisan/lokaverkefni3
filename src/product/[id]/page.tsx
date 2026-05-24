import { useSupabase } from "#hooks/useSupabase"
import { useEffect } from "react";
import { useParams } from "react-router";

export default function ProductPage() {
    const {singleProduct, getSingleProduct} = useSupabase();

    const {id} = useParams();

    useEffect(() => {
        getSingleProduct(id);
    }, [getSingleProduct])
    return <div>ProductPage</div>
}