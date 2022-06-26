import React, { createContext, useState, useContext } from "react";

type ContextValueType = { [key: string]: any };

export const CartContext = createContext<ContextValueType>({});
export const useCart = () => useContext(CartContext);

interface CartItem {
  name: string;
  [key: string]: any;
}

export const CartProvider: React.FC = ({ children }) => {
  const [showCart, setShowCart] = useState(true);
  const [items, setItems] = useState<CartItem[]>([]);
  return (
    <CartContext.Provider
      value={{
        showCart,
        setShowCart,
        items,
        setItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
