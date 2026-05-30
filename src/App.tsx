
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './featured/compoments/layout/Layout'
import QueryPage from './search/[query]/page'
import ProductPage from './product/[id]/page'
import ProductDetails from './featured/compoments/ProductDetail'
import CartPage from './cart/page'
import CheckoutPage from './checkout/page'
import OrderComplete from './featured/compoments/OrderComplete'




export default  function App() {


  return (
    <>
    <a href='/'><h1>peepeepoopoo</h1></a>
      <BrowserRouter >
     <Layout >
      <Routes>
        <Route path="/" element={''}/>
        <Route path="/search/:query" element={<QueryPage/>}/>
        <Route path="/product/:id" element={<ProductPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/checkout" element={<CheckoutPage/>}/>
        <Route path="/confirmorder" element={<OrderComplete/>}/>
      </Routes>
     </Layout>
     </BrowserRouter>
    
    </>
  )
}