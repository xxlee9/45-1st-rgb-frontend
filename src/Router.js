import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ProductList from "./pages/ProductList/ProductList";
import Order from "./pages/Order/Order";
import Invoice from "./pages/Invoice/Invoice";
import User from "./pages/User/User";
import Cart from "./components/Cart/Cart";

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user" element={<User />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/order" element={<Order />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
