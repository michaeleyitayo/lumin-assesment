import React from "react";
import Loader from "../components/loader";
import Product from "../components/product";
import { useProducts } from "../context/products-context";

const Products: React.FC = () => {
  const { products } = useProducts();
  return (
    <div id="shop" className="bg-[#e0e2e0] w-full flex justify-center">
      <div className=" p-[40px] py-[80px] xxl:py-[160px] grid grid-cols-2 md:grid-cols-3 gap-[70px] flex-1 max-w-[1440px]">
        {products ? (
          products.map((product) => <Product {...product} key={product.id} />)
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Products;
