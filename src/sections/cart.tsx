import React from "react";
import { useCart } from "../context/cart-context";
import caretRight from "../assets/icons/caretRight.svg";
import CartItem from "../components/cart-item";

const Cart = () => {
  const { showCart, setShowCart, items } = useCart();
  return (
    <div
      className={`fixed top-0 right-0 transform w-screen h-screen transition-all duration-500 flex  justify-end ${
        showCart
          ? "translate-x-0 bg-[#cdd1ce90]"
          : " translate-x-[100%] bg-transparent"
      }`}
    >
      <div className="flex-1" onClick={() => setShowCart(false)}></div>
      <div className="bg-[#f2f2ef] h-full w-full md:w-[446px] flex flex-col items-center p-[30px] text-center">
        <h3 className=" font-serif text-[20px]">My Shopping Cart</h3>
        <div className="w-full flex justify-between">
          <button
            className="w-[24px] h-[24px] border-[1px] rounded-full border-[rgb(198, 204, 199)] flex items-center justify-center"
            onClick={() => setShowCart(false)}
          >
            <img src={caretRight} className="w-9/12" alt="" />
          </button>
          <select
            name=""
            id=""
            className="text-[14px] bg-transparent outline-none"
          >
            <option value="USD">USD</option>
          </select>
        </div>

        {items.length ? (
          <>
            <div className="flex-1 w-full my-[20px] flex flex-col gap-5 overflow-y-auto">
              {items.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
            <div className="mt-auto w-full flex justify-between font-bold text-[14px]">
              <p>SUBTOTAL</p>
              <p>
                {items.reduce((a, b) => +a + +b.details.price * b.quantity, 0)}
              </p>
            </div>
          </>
        ) : (
          <p className="mt-[70px] text-[16px]">
            There are no items in your cart <br />
            <a href="#shop" className="underline">
              Get shopping {">>"}
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Cart;
