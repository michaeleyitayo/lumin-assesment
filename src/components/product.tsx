import React from "react";

const Product: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        src="https://www.luminskin.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2960%2F5204%2Ffiles%2FLumin_Classic_Maintenance_Set_PLPAsset1.png%3Fv%3D1637005940&w=1920&q=75"
        alt=""
        className="w-full"
      />
      <h4 className="text-[13px] font-normal">Age management Colletion</h4>
      <p className="text-[13px] font-normal">From $48.00</p>
      <button className="bg-[#4b5548] text-[16px] text-white w-5/6 py-[10px] mt-[20px]">
        Add to cart
      </button>
    </div>
  );
};

export default Product;
