
import { useEffect } from 'react'
import './App.css'
import { useSupabase } from './hooks/useSupabase'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './featured/compoments/layout/Layout'




export default  function App() {


  return (
    <>
    <h1>peepeepoopoo</h1>
      <BrowserRouter >
     <Layout >
      <Routes>
        <Route path="/" element={''}/>
      </Routes>
     </Layout>
     </BrowserRouter>
    
    </>
  )
}