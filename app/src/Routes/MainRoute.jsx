import React from "react";
import { Routes, Route } from "react-router-dom";

import Cart from "../Pages/Cart";
import ProductListing from "../Pages/Home/ProductListing";
const MainRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/" element={<Cart />} />
      </Routes>
    </>
  );
};

export default MainRoute;
