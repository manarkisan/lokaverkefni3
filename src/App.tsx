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
            <Route path="/lokaverkefni3/" element={<Dashboard />} />
            <Route path="/lokaverkefni3/search/:query" element={<QueryPage />} />
            <Route path="/lokaverkefni3/product/:id" element={<ProductPage />} />
            <Route path="/lokaverkefni3/category/:genre" element={<CategoryPage />} />

            <Route path="/lokaverkefni3/login" element={<LoginForm />} />
            <Route path="/lokaverkefni3/signup" element={<SignupForm />} />

            <Route path="/lokaverkefni3/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
            <Route path="/lokaverkefni3/account" element={<ProtectedRoute><UserAccount /></ProtectedRoute>} />
            <Route path="/lokaverkefni3/checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />
            <Route path="/lokaverkefni3/confirmorder" element={<ProtectedRoute><OrderComplete /></ProtectedRoute>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}
