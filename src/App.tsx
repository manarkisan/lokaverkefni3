
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './featured/compoments/layout/Layout'
import QueryPage from './search/[query]/page'
import ProductPage from './product/[id]/page'
import ProductDetails from './featured/compoments/ProductDetail'




export default  function App() {


  return (
    <>
    <h1>peepeepoopoo</h1>
      <BrowserRouter >
     <Layout >
      <Routes>
        <Route path="/" element={''}/>
        <Route path="/search/:query" element={<QueryPage/>}/>
        <Route path="/product/:id" element={<ProductPage/>}/>
        {/* <Route path="/product/:id" element={<ProductDetails/>}/> */}
      </Routes>
     </Layout>
     </BrowserRouter>
    
    </>
  )
}