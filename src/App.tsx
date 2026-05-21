
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './featured/compoments/layout/Layout'
import QueryPage from './search/[query]/page'




export default  function App() {


  return (
    <>
    <h1>peepeepoopoo</h1>
      <BrowserRouter >
     <Layout >
      <Routes>
        <Route path="/" element={''}/>
        <Route path="/search/:query" element={<QueryPage/>}/>
      </Routes>
     </Layout>
     </BrowserRouter>
    
    </>
  )
}