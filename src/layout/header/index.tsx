import React from "react";
import cart from "../../assets/icons/cart.svg";
import { useCart } from "../../context/cart-context";

const Header: React.FC = () => {
  const { setShowCart, items } = useCart();

  return (
    <div className="bg-black p-[20px] text-white flex items-center justify-center">
      <h1 className="text-[30px] tracking-[10px] font-thin ml-auto">LUMIN</h1>
      <button
        className="ml-auto flex items-start"
        onClick={() => setShowCart(true)}
      >
        <img src={cart} className="w-[25px]" alt="" />
        <p className="text-[12px] ml-[2px]">{items.length}</p>
      </button>
    </div>
  );
};

export default Header;
