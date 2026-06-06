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
import Dashboard from "./featured/compoments/Dashboard/Dashboard";
import SignupForm from "./featured/compoments/user/SignupForm";
import ProtectedRoute from "./featured/compoments/ProtectedRoute";
import CategoryPage from "./category/page";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/search/:query" element={<QueryPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/category/:genre" element={<CategoryPage />} />

            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />

            <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
            <Route path="/account" element={<ProtectedRoute><UserAccount /></ProtectedRoute>} />
            <Route path="/checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />
            <Route path="/confirmorder" element={<ProtectedRoute><OrderComplete /></ProtectedRoute>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}
