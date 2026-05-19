// "use client";
import { useEffect } from 'react'
import './App.css'
import { useSupabase } from './hooks/useSupabase'



export default  function App() {

  const { products, getProducts } = useSupabase()

  useEffect(() => {
    getProducts();
    console.log(products);
  }, [getProducts]);

  return (
    <>
    <h1>peepeepoopoo</h1>
    
    </>
  )
}