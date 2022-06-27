import React from "react";
import x from "../assets/icons/x.svg";
import { ICartItem, useCart } from "../context/cart-context";

const CartItem: React.FC<ICartItem> = (item) => {
  const { addItem, removeItem, removeItemAll } = useCart();
  return (
    <div className="bg-white p-[10px] flex items-start text-[#1e2d2b]">
      <div className="flex-1 text-left">
        <p className="text-[14px]">{item.details.title}</p>
        <p className="text-[11px]">Dry / Two Month</p>
        <p className="text-[11px] mt-[5px]">
          Two month supply shipped every two months
        </p>
        <div className="flex w-full justify-between mt-[4px]">
          <div className="h-[26px] flex gap-[12px] items-center px-[10px] border-[1px] border-[rgb(226, 230, 227)]">
            <button
              onClick={() => removeItem(item.details)}
              className="text-[#aaaaaa]"
            >
              -
            </button>
            <p className="text-[14px]">{item.quantity}</p>
            <button
              onClick={() => addItem(item.details)}
              className="text-[#aaaaaa]"
            >
              +
            </button>
          </div>
          <p className="text-[14px]">USD {item.details.price}</p>
        </div>
      </div>
      <img src={item.details.image_url} className="h-[60px] w-[60px]" alt="" />
      <img
        src={x}
        onClick={() => removeItemAll(item.details)}
        className="w-[10px]"
        alt=""
      />
    </div>
  );
};

export default CartItem;
