import { useSupabase } from "#hooks/useSupabase";
import { useEffect } from "react";
import SmallCard from "./SmallCard";

export default function Dashboard() {

  const {
    // plastic, getPlastic, paper, getPaper, 
    organic, getOrganic, 
    // generic, getGeneric
  } = useSupabase();

  const heroData = [{heading: "Top Deal!", image: "", product: organic}]
  const categoryHeaders = [{heading: "Top Deal!", image: "", product: organic}]

  useEffect(() => {
    // getPlastic();
    // getPaper();
    getOrganic();
    // getGeneric();
  }, [
    // getPlastic, getPaper, 
    getOrganic, 
    // getGeneric
  ])


  return (
    <>
      <div><p>Hello and welcome!</p><p> Would you like to buy some trash?</p></div>
      <div className="flex">{heroData.map((product) => {
        return <SmallCard heading={product.heading} image={product.image} key={product.heading} /> 
      })}<p>Buy now!</p></div>
      <div className="flex">{categoryHeaders.map((product) => {
        return <SmallCard heading={product.heading} image={product.image} key={product.heading} /> 
      })}<p>Buy now!</p></div>
    </>
  );
}
