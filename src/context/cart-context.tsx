import React, { createContext, useState, useContext } from "react";
import { IProduct } from "./products-context";

type ContextValueType = {
  showCart: boolean;
  items: ICartItem[];
  addItem: (product: IProduct) => void;
  removeItem: (product: IProduct) => void;
  removeItemAll: (product: IProduct) => void;
  [key: string]: any;
};
export interface ICartItem {
  id: number;
  details: IProduct;
  quantity: number;
  [key: string]: any;
}

export const CartContext = createContext<ContextValueType>({
  showCart: false,
  items: [],
  addItem: (product: IProduct) => {},
  removeItem: (product: IProduct) => {},
  removeItemAll: (product: IProduct) => {},
});

export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [items, setItems] = useState<ICartItem[]>([]);

  const addItem = (product: IProduct) => {
    setShowCart(true);
    let newItems = [...items];
    const thisItem = items.find((item) => item.id === product.id);
    if (thisItem) {
      thisItem.quantity = thisItem.quantity + 1;
      const thisItemIndex = items.findIndex((item) => item.id === product.id);
      newItems[thisItemIndex] = thisItem;
    } else {
      newItems.push({ id: product.id, details: product, quantity: 1 });
    }
    setItems(newItems);
  };

  const removeItem = (product: IProduct) => {
    let newItems = [...items];
    const thisItem = items.find((item) => item.id === product.id);
    if (thisItem) {
      if (thisItem.quantity === 1) {
        newItems = items.filter((item) => item.id !== product.id);
      } else {
        thisItem.quantity = thisItem.quantity - 1;
        const thisItemIndex = items.findIndex((item) => item.id === product.id);
        newItems[thisItemIndex] = thisItem;
      }
      setItems(newItems);
    } else {
      console.log("Item is not in cart");
    }
  };

  const removeItemAll = (product: IProduct) => {
    setItems(items.filter((item) => item.id !== product.id));
  };
  return (
    <CartContext.Provider
      value={{
        showCart,
        setShowCart,
        items,
        setItems,
        addItem,
        removeItem,
        removeItemAll,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
