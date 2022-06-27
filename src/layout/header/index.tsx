import React from "react";
import cart from "../../assets/icons/cart.svg";
import { useCart } from "../../context/cart-context";
import { useProducts } from "../../context/products-context";

const Header: React.FC = () => {
  const { setShowCart, items } = useCart();
  const { displayCurrency, currencies, setCurrency } = useProducts();
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
      <select
        value={displayCurrency}
        onChange={(e) => setCurrency(e.target.value)}
        name=""
        id=""
        className="text-[14px] bg-transparent outline-none ml-[20px]"
      >
        {currencies?.map((c: string) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Header;
