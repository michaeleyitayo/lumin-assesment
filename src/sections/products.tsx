import React from "react";
import Product from "../components/product";

const Products = () => {
  return (
    <div className="bg-[#e0e2e0] p-[40px] grid grid-cols-2 md:grid-cols-3 gap-[70px]">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default Products;
