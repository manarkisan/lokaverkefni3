import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./featured/compoments/layout/Layout";
import QueryPage from "./search/[query]/page";
import ProductPage from "./product/[id]/page";
import CartPage from "./cart/page";
import CheckoutPage from "./checkout/page";
import OrderComplete from "./featured/compoments/OrderComplete";
import LoginForm from "./featured/compoments/user/LoginForm";
import UserAccount from "./featured/compoments/user/UserAccount";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={""} />
            <Route path="/search/:query" element={<QueryPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/confirmorder" element={<OrderComplete />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<LoginForm />} />
            <Route path="/account" element={<UserAccount />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}
