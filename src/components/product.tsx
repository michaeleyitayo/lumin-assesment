import React from "react";
import { useCart } from "../context/cart-context";
import { IProduct } from "../context/products-context";

const Product: React.FC<IProduct> = (product) => {
  const { setShowCart } = useCart();
  return (
    <div className="flex flex-col items-center">
      <div className="h-[60px]">
        <img src={product.image_url} className="h-full" alt="" />
      </div>
      <h4 className="text-[13px] font-normal">{product.title}</h4>
      <p className="text-[13px] font-normal">From ${product.price}</p>
      <button
        className="bg-[#4b5548] text-[16px] text-white w-5/6 py-[10px] mt-[20px]"
        onClick={() => setShowCart(true)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
