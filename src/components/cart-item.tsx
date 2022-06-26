import React from "react";
import x from "../assets/icons/x.svg";

const CartItem: React.FC = () => {
  return (
    <div className="bg-white p-[10px] flex items-start text-[#1e2d2b]">
      <div className="flex-1 text-left">
        <p className="text-[14px]">Classic Maintenance Set</p>
        <p className="text-[11px]">Dry / Two Month</p>
        <p className="text-[11px] mt-[5px]">
          Two month supply shipped every two months
        </p>
        <div className="flex w-full justify-between mt-[4px]">
          <div className="h-[26px] flex gap-[12px] items-center px-[10px] border-[1px] border-[rgb(226, 230, 227)]">
            <button className="text-[#aaaaaa]">-</button>
            <p className="text-[14px]">1</p>
            <button className="text-[#aaaaaa]">+</button>
          </div>
          <p className="text-[14px]">NGN 22,500.00</p>
        </div>
      </div>
      <img
        src="https://www.luminskin.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2960%2F5204%2Ffiles%2FLumin_Classic_Maintenance_Set_PLPAsset1.png%3Fv%3D1637005940&w=1920&q=75"
        className="w-[60px]"
        alt=""
      />
      <img src={x} className="w-[10px]" alt="" />
    </div>
  );
};

export default CartItem;
