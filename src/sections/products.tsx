import React from "react";
import Loader from "../components/loader";
import Product from "../components/product";
import { useProducts } from "../context/products-context";

const Products: React.FC = () => {
  const { products } = useProducts();
  console.log(products);
  return (
    <div className="bg-[#e0e2e0] p-[40px] grid grid-cols-2 md:grid-cols-3 gap-[70px]">
      {products ? (
        products.map((product) => <Product {...product} key={product.id} />)
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Products;
